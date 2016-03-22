const injectMap = new WeakMap();
const $inject = [];
class TimeInfoContainerDirective {
  constructor(injects) {
    TimeInfoContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      TimeInfoContainerDirective[item] = injects[index];
      injectMap.set(TimeInfoContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'TimeInfoContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-time-info data="vm.data"></sanji-time-info>`;
  }

  static directiveFactory(...injects) {
    TimeInfoContainerDirective.instance = new TimeInfoContainerDirective(injects);
    return TimeInfoContainerDirective.instance;
  }
}
TimeInfoContainerDirective.directiveFactory.$inject = $inject;
export default TimeInfoContainerDirective;
