import angular from 'angular';

import './form.tpl.html';
import TimeFormContainerComponent from './container.component';
import TimeFormComponent from './form.component';

const sjTimeForm = angular.module('sanji.time.form', [])
  .component('sanjiTimeFormContainer', TimeFormContainerComponent)
  .component('sanjiTimeForm', TimeFormComponent)
  .name;
export { sjTimeForm };
