const injectMap = new WeakMap();
const $inject = [];
class TimeWindowDirective {
  constructor(injects) {
    TimeWindowDirective.directiveFactory.$inject.forEach((item, index) => {
      TimeWindowDirective[item] = injects[index];
      injectMap.set(TimeWindowDirective[item], injects[index]);
    });
    this.restrict = 'E';
    this.template = `<sanji-window window-id="sanji-time-ui"
                      window-name="{{'TIME' | translate}}" show-loading-btn>
                      <sanji-window-state default-state
                        state-name="sanji-form"
                        link-name="{{'TIME_FORM_SETTING' | translate}}"
                        icon="settings">
                        <sanji-time-container></sanji-time-container>
                      </sanji-window-state>
                    </sanji-window>`;
  }

  static directiveFactory(...injects) {
    TimeWindowDirective.instance = new TimeWindowDirective(injects);
    return TimeWindowDirective.instance;
  }
}
TimeWindowDirective.directiveFactory.$inject = $inject;
export default TimeWindowDirective;
