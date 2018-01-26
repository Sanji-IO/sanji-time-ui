const $inject = ['$scope', '$ngRedux', 'sanjiWindowService', 'timeAction', 'timeService'];
const WINDOW_ID = 'sanji-time-ui';
class TimeFormContainerController {
  constructor(...injects) {
    TimeFormContainerController.$inject.forEach((item, index) => (this[item] = injects[index]));
  }

  $onInit() {
    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.unhandler = this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, this.timeAction)(this);
    this.unTzHandler = this.$scope.$watch('$ctrl.data.content.timezone', this.onTzChange.bind(this));
    this.getTime();
  }

  $onDestroy() {
    this.unhandler();
    this.unTzHandler();
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      data: state.time
    };
  }

  onTzChange(newVal, oldVal) {
    if (newVal !== oldVal) {
      this.data.content.time = this.timeService.onTzChange(this.data.content.time, newVal, oldVal);
    }
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.sanjiWindowMgr.promise = this.getTime({ force: true });
    }
  }

  onSave(event) {
    this.sanjiWindowMgr.promise = this.updateTime(event.data);
  }
}
TimeFormContainerController.$inject = $inject;
export default TimeFormContainerController;
