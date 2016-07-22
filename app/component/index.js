import 'angular-clock.css';

import angular from 'angular';
import {sjCore} from 'sanji-core-ui';
import 'angular-clock';

import {sjTimeInfo} from './info';
import {sjTimeForm} from './form';

import i18nConfig from './component.i18n';
import TimeService from './component.service';
import TimeWindowComponent from './window.component';

const sjTime = angular.module('sanji.time', [
  sjCore,
  'ds.clock',
  sjTimeInfo,
  sjTimeForm
])
  .config(i18nConfig)
  .service('timeService', TimeService)
  .component('sanjiTimeWindow', TimeWindowComponent)
  .name;
export {sjTime};
