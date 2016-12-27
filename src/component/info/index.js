import angular from 'angular';

import './info.tpl.html';
import TimeInfoContainerComponent from './container.component';
import TimeInfoComponent from './info.component';

const sjTimeInfo = angular.module('sanji.time.info', [])
  .component('sanjiTimeInfoContainer', TimeInfoContainerComponent)
  .component('sanjiTimeInfo', TimeInfoComponent)
  .name;
export { sjTimeInfo };
