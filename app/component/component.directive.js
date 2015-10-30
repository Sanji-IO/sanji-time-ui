const injectMap = new WeakMap();
const $inject = [];
class TimeDirective {
  constructor(injects) {
    TimeDirective.directiveFactory.$inject.forEach((item, index) => {
      TimeDirective[item] = injects[index];
      injectMap.set(TimeDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-time-edit.tpl.html'
    this.restrict = 'EA';
    this.controller = 'TimeController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      
      data: '=',
      
      submitCallback: '&onSubmit'
    };
  }

  static directiveFactory(...injects) {
    TimeDirective.instance = new TimeDirective(injects);
    return TimeDirective.instance;
  }
}
TimeDirective.directiveFactory.$inject = $inject;
export default TimeDirective;
