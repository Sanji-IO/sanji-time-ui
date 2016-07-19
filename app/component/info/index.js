import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './info.tpl.html';
import TimeInfoContainerComponent from './container.component';
import TimeInfoComponent from './info.component';

let app = angular.module('sanji.time.info', [sjCore]);
app.component('sanjiTimeInfoContainer', TimeInfoContainerComponent);
app.component('sanjiTimeInfo', TimeInfoComponent);
export default app = app.name;
