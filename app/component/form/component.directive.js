const injectMap = new WeakMap();
const $inject = [];
class TimeFormDirective {
  constructor(injects) {
    TimeFormDirective.directiveFactory.$inject.forEach((item, index) => {
      TimeFormDirective[item] = injects[index];
      injectMap.set(TimeFormDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-time-form.tpl.html'
    this.restrict = 'EA';
    this.controller = 'TimeFormController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      data: '=',
      submitCallback: '&onSubmit'
    };
  }

  static directiveFactory(...injects) {
    TimeFormDirective.instance = new TimeFormDirective(injects);
    return TimeFormDirective.instance;
  }
}
TimeFormDirective.directiveFactory.$inject = $inject;
export default TimeFormDirective;
