const $inject = ['$scope', 'sanjiWindowService', 'timeService'];
const WINDOW_ID = 'sanji-time-ui';
class TimeInfoContainerController {
  constructor(...injects) {
    TimeInfoContainerController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  $onInit() {
    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
    this.sanjiWindowMgr.promise = this.timeService.get().then(data => this.data = data);
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.$onInit();
    }
  }
}
TimeInfoContainerController.$inject = $inject;
export default TimeInfoContainerController;
