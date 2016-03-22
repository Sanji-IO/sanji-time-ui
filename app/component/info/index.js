import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import TimeInfoContainerController from './component-container.controller';
import TimeInfoController from './component.controller';
import TimeInfoContainerDirective from './component-container.directive';
import TimeInfoDirective from './component.directive';

let app = angular.module('sanji.time.info', [sjCore]);
app.controller('TimeInfoContainerController', TimeInfoContainerController);
app.controller('TimeInfoController', TimeInfoController);
app.directive('sanjiTimeInfoContainer', TimeInfoContainerDirective.directiveFactory);
app.directive('sanjiTimeInfo', TimeInfoDirective.directiveFactory);
export default app = app.name
