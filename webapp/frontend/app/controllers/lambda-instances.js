import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(lambdaInstance) {
      lambdaInstance.destroyRecord();
      // this.store.deleteRecord(lambdaInstance);
      // lambdaInstance.save();
    }
  }
});
