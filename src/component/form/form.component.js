import TimeFormController from './form.controller';

const TimeFormComponent = {
  bindings: {
    data: '<',
    submitCallback: '&onSubmit'
  },
  templateUrl: 'sanji-time-form.tpl.html',
  controller: TimeFormController
};
export default TimeFormComponent;
