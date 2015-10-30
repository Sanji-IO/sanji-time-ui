const injectMap = new WeakMap();
const $inject = [];
class TimeContainerDirective {
  constructor(injects) {
    TimeContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      TimeContainerDirective[item] = injects[index];
      injectMap.set(TimeContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'TimeContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-time data="vm.data" on-submit="vm.onSave(data)"></sanji-time>`;
  }

  static directiveFactory(...injects) {
    TimeContainerDirective.instance = new TimeContainerDirective(injects);
    return TimeContainerDirective.instance;
  }
}
TimeContainerDirective.directiveFactory.$inject = $inject;
export default TimeContainerDirective;
