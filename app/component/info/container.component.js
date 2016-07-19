import TimeInfoContainerController from './container.controller';

const TimeInfoContainerComponent = {
  template: `<sanji-time-info data="vm.data"></sanji-time-info>`,
  controller: TimeInfoContainerController,
  controllerAs: 'vm'
};
export default TimeInfoContainerComponent;
