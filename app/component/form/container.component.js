import TimeFormContainerController from './container.controller';

const TimeFormContainerComponent = {
  template: `<sanji-time-form data="vm.data" on-submit="vm.onSave(data)"></sanji-time-form>`,
  controller: TimeFormContainerController,
  controllerAs: 'vm'
};
export default TimeFormContainerComponent;
