const $inject = ['$q', 'rest', 'exception', '_', 'pathToRegexp', '$filter', 'logger', 'moment'];
const config = require('./component.resource.json');
class TimeService {
  constructor(...injects) {
    TimeService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.data = {};
  }

  _transform(data) {
    let results = data.timezone.split(',');
    let tz = results[0];
    let dst = parseInt(results[1], 10);
    let duration = parseFloat(tz.replace(':', '.'));

    return {
      digitalTime: this.moment(data.time).valueOf(),
      gmtOffset: duration + dst,
      content: data,
      formOptions: {},
      fields: config.fields
    };
  }

  get() {
    let toPath = this.pathToRegexp.compile(config.get.url);
    return this.rest.get(toPath(), (__DEV__) ? {basePath: __BASE_PATH__} : undefined)
    .then(res => {
      this.data = this._transform(res.data);
    })
    .catch(err => {
      this.exception.catcher('[TimeService] Get data error.')(err);
      return this.$q.reject();
    });
  }

  update(data) {
    let toPath = this.pathToRegexp.compile(config.put.url);
    let path = (undefined !== data.content.id) ? toPath({id: data.content.id}) : toPath();
    return this.rest.put(path, data.content, data.formOptions.files, (__DEV__) ? {basePath: __BASE_PATH__} : undefined)
    .then(res => {
      this.logger.success(this.$filter('translate')('TIME_FORM_SAVE_SUCCESS'), res.data);
      return res.data;
    })
    .catch(err => {
      this.exception.catcher('[TimeService] Update data error.')(err);
      return this.$q.reject();
    });
  }
}
TimeService.$inject = $inject;
export default TimeService;
