import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './form.tpl.html';
import TimeFormContainerComponent from './container.component';
import TimeFormComponent from './form.component';

let app = angular.module('sanji.time.form', [sjCore]);
app.component('sanjiTimeFormContainer', TimeFormContainerComponent);
app.component('sanjiTimeForm', TimeFormComponent);
export default app = app.name;
