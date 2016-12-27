const $inject = ['$q', 'rest', 'exception', 'pathToRegexp', '$filter', 'logger', 'moment'];
const config = require('./component.resource.json');
class TimeService {
  constructor(...injects) {
    TimeService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.restConfig = {
      basePath: (process.env.NODE_ENV === 'development') ? __BASE_PATH__ : undefined
    };
    this.message = {
      read: {
        error: '[TimeService] Get data error.'
      },
      update: {
        success: 'TIME_FORM_SAVE_SUCCESS',
        error: '[TimeService] Update data error.'
      }
    };
  }

  _transform(data) {
    return {
      digitalTime: this.moment(data.time).valueOf(),
      content: data,
      formOptions: {},
      fields: config.fields
    };
  }

  _transformZone(data) {
    const sortData = data.sort((a, b) => {
      //compare two values
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
    return sortData.map(item => {
      return {
        label: item.name,
        value: item.name
      };
    });
  }

  setResponseMsg(message) {
    if (message) {
      this.message = Object.assign(this.message, message);
    }
  }

  get() {
    return this.$q.all([
      this.getTime(),
      this.getZone()
    ])
    .then(([time, zones]) => {
      time.fields[0].templateOptions.options = zones;
      return time;
    });
  }

  getTime() {
    const toPath = this.pathToRegexp.compile(config.get.url);
    return this.rest.get(toPath(), this.restConfig)
    .then(res => this._transform(res.data))
    .catch(err => {
      this.exception.catcher(this.$filter('translate')(this.message.read.error))(err);
      return this.$q.reject();
    });
  }

  getZone() {
    return this.rest.get('/system/zoneinfo', this.restConfig)
    .then(res => this._transformZone(res.data.zone))
    .catch(err => {
      this.exception.catcher(this.$filter('translate')(this.message.read.error))(err);
      return this.$q.reject();
    });
  }

  update(data) {
    const toPath = this.pathToRegexp.compile(config.put.url);
    const path = (undefined !== data.content.id) ? toPath({id: data.content.id}) : toPath();
    return this.rest.put(path, data.content, data.formOptions.files, this.restConfig)
    .then(res => {
      this.logger.success(this.$filter('translate')(this.message.update.success), res.data);
      return res.data;
    })
    .catch(err => {
      this.exception.catcher(this.$filter('translate')(this.message.update.error))(err);
      return this.$q.reject();
    });
  }
}
TimeService.$inject = $inject;
export default TimeService;
