const $inject = [];
class TimeInfoController {
  constructor(...injects) {
    TimeInfoController.$inject.forEach((item, index) => this[item] = injects[index]);
  }
}
TimeInfoController.$inject = $inject;
export default TimeInfoController;
