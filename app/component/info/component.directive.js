const injectMap = new WeakMap();
const $inject = [];
class TimeInfoDirective {
  constructor(injects) {
    TimeInfoDirective.directiveFactory.$inject.forEach((item, index) => {
      TimeInfoDirective[item] = injects[index];
      injectMap.set(TimeInfoDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-time-info.tpl.html'
    this.restrict = 'EA';
    this.controller = 'TimeInfoController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      data: '='
    };
  }

  static directiveFactory(...injects) {
    TimeInfoDirective.instance = new TimeInfoDirective(injects);
    return TimeInfoDirective.instance;
  }
}
TimeInfoDirective.directiveFactory.$inject = $inject;
export default TimeInfoDirective;
