const $inject = [];
class TimeFormController {
  constructor(...injects) {
    TimeFormController.$inject.forEach((item, index) => (this[item] = injects[index]));
  }

  save(data) {
    this.submitCallback({
      $event: { data: data }
    });
  }
}
TimeFormController.$inject = $inject;
export default TimeFormController;
