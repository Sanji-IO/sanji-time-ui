const $inject = ['$q', 'rest', 'exception', 'pathToRegexp', '$filter', 'logger', 'moment'];
const config = require('./component.resource.json');
class TimeService {
  constructor(...injects) {
    TimeService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.data = {};
    this.restConfig = {
      basePath: (__DEV__) ? __BASE_PATH__ : undefined
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
    const results = data.timezone.split(',');
    const tz = results[0];
    const dst = parseInt(results[1], 10);
    const duration = parseFloat(tz.replace(':', '.'));

    return {
      digitalTime: this.moment(data.time).valueOf(),
      gmtOffset: duration + dst,
      content: data,
      formOptions: {},
      fields: config.fields
    };
  }

  setResponseMsg(message) {
    if (message) {
      this.message = Object.assign(this.message, message);
    }
  }

  get() {
    const toPath = this.pathToRegexp.compile(config.get.url);
    return this.rest.get(toPath(), this.restConfig)
    .then(res => this.data = this._transform(res.data))
    .catch(err => {
      this.exception.catcher(this.$filter('translate')(this.message.get.error))(err);
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
