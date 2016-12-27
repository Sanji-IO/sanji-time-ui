import TimeFormContainerController from './container.controller';

const TimeFormContainerComponent = {
  template: `<sanji-time-form data="$ctrl.data" on-submit="$ctrl.onSave($event)"></sanji-time-form>`,
  controller: TimeFormContainerController
};
export default TimeFormContainerComponent;
