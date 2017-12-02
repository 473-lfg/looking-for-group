import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  currentUser: '',
  currentlyApplyingTo: '',
  groupNameApplyingTo: '',

  actions: {
      invalidateSession() {
          this.get('session').invalidate();
      }
  }

});
