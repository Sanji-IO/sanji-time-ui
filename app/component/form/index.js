import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import TimeFormContainerController from './component-container.controller';
import TimeFormController from './component.controller';
import TimeFormContainerDirective from './component-container.directive';
import TimeFormDirective from './component.directive';

let app = angular.module('sanji.time.form', [sjCore]);
app.controller('TimeFormContainerController', TimeFormContainerController);
app.controller('TimeFormController', TimeFormController);
app.directive('sanjiTimeFormContainer', TimeFormContainerDirective.directiveFactory);
app.directive('sanjiTimeForm', TimeFormDirective.directiveFactory);
export default app = app.name
