const TimeWindowComponent = {
  template: `<sanji-window window-id="sanji-time-ui"
              window-name="{{'TIME' | translate}}" show-loading-btn>
              <sanji-window-state default-state
                state-name="sanji-info"
                link-name="{{'TIME_WINDOW_INFO' | translate}}"
                icon="info">
                <sanji-time-info-container></sanji-time-info-container>
              </sanji-window-state>
              <sanji-window-state
                state-name="sanji-form"
                link-name="{{'TIME_FORM_SETTING' | translate}}"
                icon="settings">
                <sanji-time-form-container></sanji-time-form-container>
              </sanji-window-state>
            </sanji-window>`
};
export default TimeWindowComponent;
