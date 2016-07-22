import angular from 'angular';
import {sjCore} from 'sanji-core-ui';

import './info.tpl.html';
import TimeInfoContainerComponent from './container.component';
import TimeInfoComponent from './info.component';

const sjTimeInfo = angular.module('sanji.time.info', [sjCore])
  .component('sanjiTimeInfoContainer', TimeInfoContainerComponent)
  .component('sanjiTimeInfo', TimeInfoComponent)
  .name;
export {sjTimeInfo};
