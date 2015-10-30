const $inject = [];
class TimeController {
  constructor(...injects) {
    TimeController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data) {
    this.submitCallback({data: data});
  }
}
TimeController.$inject = $inject;
export default TimeController;
