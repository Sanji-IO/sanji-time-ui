import 'angular-material.css';
import 'angular-material-icons.css';
import 'angular-sanji-window.css';
import 'toastr.css';
import './app.scss';
import angular from 'angular';
import {sjCore} from 'sanji-core-ui';
import {sjTime} from './component';

const app = angular.module('webapp', [sjCore, sjTime]);
class AppController {
  constructor($translate, LANG_KEYS, auth) {
    this.$translate = $translate;
    this.currentLang = $translate.use();
    this.langs = LANG_KEYS;
    this.auth = auth;
  }

  changeLang(lang) {
    this.$translate.use(lang);
  }

  isAuthorized(event) {
    return this.auth.isAuthorized(event.roles);
  }
}
app.run(session => {
  session.create('token', 'test');
  session.setUserData({
    role: 'admin'
  });
});
app.controller('AppController', AppController);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
