const $inject = ['sanjiWindowService', 'timeService'];
class TimeContainerController {
  constructor(...injects) {
    TimeContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    const WINDOW_ID = 'sanji-time-ui';
    const EDIT_STATE = 'sanji-edit';
    let timeService = this.timeService;
    let sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);

    this.data = timeService.data;

    this.timeService.get().then(() => {
      this.data = timeService.data;
      sanjiWindowMgr.navigateTo(EDIT_STATE);
    });
  }

  onSave(data) {
    this.timeService.update(data);
  }
}
TimeContainerController.$inject = $inject;
export default TimeContainerController;
