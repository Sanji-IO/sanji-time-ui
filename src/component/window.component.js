const TimeWindowComponent = {
  bindings: {
    onAuthorized: '&'
  },
  template: `<sanji-window window-id="sanji-time-ui"
              window-name="{{'TIME' | translate}}" show-loading-btn>
              <sanji-window-state default-state
                state-name="sanji-info"
                link-name="{{'TIME_WINDOW_INFO' | translate}}"
                icon="info">
                <sanji-time-info-container></sanji-time-info-container>
              </sanji-window-state>
              <sanji-window-state ng-if="::$ctrl.isAuthorized(['superadmin', 'admin'])"
                state-name="sanji-form"
                link-name="{{'TIME_FORM_SETTING' | translate}}"
                icon="settings">
                <sanji-time-form-container></sanji-time-form-container>
              </sanji-window-state>
            </sanji-window>`,
  controller: class TimeWindowController {
    constructor() {}

    isAuthorized(roles) {
      return this.onAuthorized({
        $event: {
          roles: roles
        }
      });
    }
  }
};
export default TimeWindowComponent;
