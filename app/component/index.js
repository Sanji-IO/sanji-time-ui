import 'angular-clock.css';

import angular from 'angular';
import sjCore from 'sanji-core-ui';
import 'angular-clock';

import sjTimeInfo from './info';
import sjTimeForm from './form';

import i18nConfig from './component.i18n';
import TimeService from './component.service';
import TimeWindowComponent from './window.component';

let app = angular.module('sanji.time', [
  sjCore,
  'ds.clock',
  sjTimeInfo,
  sjTimeForm
]);
app.config(i18nConfig);
app.service('timeService', TimeService);
app.component('sanjiTimeWindow', TimeWindowComponent);
export default app = app.name;
