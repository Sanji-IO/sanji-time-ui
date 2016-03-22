const $inject = [];
class TimeInfoController {
  constructor(...injects) {
    TimeInfoController.$inject.forEach((item, index) => this[item] = injects[index]);
    console.log(this);
    console.log(this.data);
  }
}
TimeInfoController.$inject = $inject;
export default TimeInfoController;
