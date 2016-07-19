import TimeFormController from './form.controller';

const TimeFormComponent = {
  bindings: {
    data: '<',
    submitCallback: '&onSubmit'
  },
  templateUrl: 'sanji-time-form.tpl.html',
  controller: TimeFormController,
  controllerAs: 'vm'
};
export default TimeFormComponent;
