import angular from 'angular';
import {sjCore} from 'sanji-core-ui';

import './form.tpl.html';
import TimeFormContainerComponent from './container.component';
import TimeFormComponent from './form.component';

const sjTimeForm = angular.module('sanji.time.form', [sjCore])
  .component('sanjiTimeFormContainer', TimeFormContainerComponent)
  .component('sanjiTimeForm', TimeFormComponent)
  .name;
export {sjTimeForm};
