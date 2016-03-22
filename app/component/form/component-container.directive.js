const injectMap = new WeakMap();
const $inject = [];
class TimeFormContainerDirective {
  constructor(injects) {
    TimeFormContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      TimeFormContainerDirective[item] = injects[index];
      injectMap.set(TimeFormContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'TimeFormContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-time-form data="vm.data" on-submit="vm.onSave(data)"></sanji-time-form>`;
  }

  static directiveFactory(...injects) {
    TimeFormContainerDirective.instance = new TimeFormContainerDirective(injects);
    return TimeFormContainerDirective.instance;
  }
}
TimeFormContainerDirective.directiveFactory.$inject = $inject;
export default TimeFormContainerDirective;
