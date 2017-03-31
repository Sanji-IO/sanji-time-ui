import { cloneDeep } from 'lodash/fp';

const $inject = ['$q', 'rest', 'exception', 'pathToRegexp', '$filter', 'logger', 'moment'];
const config = require('./component.resource.json');
class TimeService {
  constructor(...injects) {
    TimeService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.restConfig = {
      basePath: process.env.NODE_ENV === 'development' ? __BASE_PATH__ : undefined
    };
    if (process.env.NODE_ENV === 'development') {
      this.restConfig.headers = {
        'mx-api-token': __API_TOKEN__
      };
    }
    this.message = {
      read: {
        error: '[TimeService] Get data error.'
      },
      update: {
        success: 'TIME_FORM_SAVE_SUCCESS',
        error: '[TimeService] Update data error.'
      }
    };
    this.zone;
  }

  getGmtOffset(tz, zone) {
    const result = zone.originData.find(item => item.name === tz);
    if (!result) {
      throw new Error('Can not find timezone offset');
    }
    const sign = result.offset.substring(0, 1);
    const hour = parseInt(sign + result.offset.substring(1, 3), 10);
    const minuteToHour = parseInt(sign + result.offset.substring(3), 10) / 60;
    return hour + minuteToHour;
  }

  _getTzOffsetTime(data, zone) {
    const now = new Date(data.time);
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * this.getGmtOffset(data.timezone, zone));
  }

  _transform(data, zone) {
    return {
      gmtOffset: this.getGmtOffset(data.timezone, zone).toString(),
      digitalTime: this.moment(this._getTzOffsetTime(data, zone)).valueOf(),
      content: Object.assign({}, data, { time: this._getTzOffsetTime(data, zone) }),
      formOptions: {},
      fields: config.fields
    };
  }

  _transformZone(data) {
    return data
      .map(item => {
        return {
          label: `(${item.offset}) ${item.name}`,
          value: item.name
        };
      })
      .sort((a, b) => {
        //compare two values
        if (a.label.toLowerCase() < b.label.toLowerCase()) return -1;
        if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
        return 0;
      });
  }

  setResponseMsg(message) {
    if (message) {
      this.message = Object.assign(this.message, message);
    }
  }

  onTzChange(currentTime, newVal, oldVal) {
    const utc = currentTime.getTime() - this.getGmtOffset(oldVal, this.zone) * 3600000;
    const offset = new Date(utc + 3600000 * this.getGmtOffset(newVal, this.zone));
    return offset;
  }

  get() {
    return this.getZone()
      .then(zone => {
        this.zone = zone;
        return this.getTime(zone);
      })
      .then(time => {
        this.originData = cloneDeep(time);
        time.fields[1].templateOptions.options = this.zone.list;
        return time;
      });
  }

  getTime(zone) {
    const toPath = this.pathToRegexp.compile(config.get.url);
    return this.rest.get(toPath(), this.restConfig).then(res => this._transform(res.data, zone)).catch(err => {
      this.exception.catcher(this.$filter('translate')(this.message.read.error))(err);
      return this.$q.reject();
    });
  }

  getZone() {
    return this.rest
      .get('/system/zoneinfo', this.restConfig)
      .then(res => {
        return {
          list: this._transformZone(res.data.zone),
          originData: res.data.zone
        };
      })
      .catch(err => {
        this.exception.catcher(this.$filter('translate')(this.message.read.error))(err);
        return this.$q.reject();
      });
  }

  update(data) {
    const toPath = this.pathToRegexp.compile(config.put.url);
    const path = undefined !== data.content.id ? toPath({ id: data.content.id }) : toPath();
    const tzOffset = data.content.time.getTimezoneOffset() * 60000;
    const gmtOffset = this.getGmtOffset(data.content.timezone, this.zone) * 3600000;
    const utc = new Date(data.content.time.getTime() - gmtOffset - tzOffset);
    const payload = Object.assign({}, data.content, { time: utc.toISOString() });
    return this.rest
      .put(path, payload, data.formOptions.files, this.restConfig)
      .then(res => {
        this.logger.success(this.$filter('translate')(this.message.update.success), res.data);
        return this._transform(res.data, this.zone);
      })
      .catch(err => {
        this.exception.catcher(this.$filter('translate')(this.message.update.error))(err);
        return this.$q.reject();
      });
  }
}
TimeService.$inject = $inject;
export default TimeService;
