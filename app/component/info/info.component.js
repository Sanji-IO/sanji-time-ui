import TimeInfoController from './info.controller';

const TimeInfoComponent = {
  bindings: {
    data: '<'
  },
  templateUrl: 'sanji-time-info.tpl.html',
  controller: TimeInfoController,
  controllerAs: 'vm'
};
export default TimeInfoComponent;
