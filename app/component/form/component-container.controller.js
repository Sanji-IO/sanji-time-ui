const $inject = ['$scope', 'sanjiWindowService', 'timeService'];
const WINDOW_ID = 'sanji-time-ui';
class TimeFormContainerController {
  constructor(...injects) {
    TimeFormContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.data = this.timeService.data;

    this.activate();

    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this))
  }

  activate() {
    this.sanjiWindowMgr.promise = this.timeService.get().then(() => {
      this.data = this.timeService.data;
    });
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.activate();
    }
  }

  onSave(data) {
    this.sanjiWindowMgr.promise = this.timeService.update(data);
  }
}
TimeFormContainerController.$inject = $inject;
export default TimeFormContainerController;
