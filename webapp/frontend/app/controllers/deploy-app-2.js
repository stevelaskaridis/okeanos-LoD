import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    deploy(application_id) {
      var applications;
      var _this = this;
      Ember.run.later((function () {
        this.store.unloadAll('lambda-app');
        this.modelFor('lambda-instance').application.reload();
        let ids = this.store.peekAll('lambda-app').getEach('id');
        applications = _this.store.filter('lambda-app', {},
          function (application) {
            if (application.get('status_code') !== 0) {
              return false;
            }
            let id = application.get('id');
            for (var i = 0; i < ids.length; i++) {
              if (id === ids[i]) {
                return false;
              }
            }
            return true;
          });
      }), 1000);

      _this.set("request", true);
      Ember.run.later((function () {
        _this.set("request", false);
      }), 2500);
    }
  }
});
