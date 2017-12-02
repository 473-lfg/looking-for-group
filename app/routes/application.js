import Ember from 'ember';

// const { service } = Ember.inject;

export default Ember.Route.extend({

    // currentUser: service(),
    //
    //   beforeModel() {
    //     return this._loadCurrentUser();
    //   },
    //
    //   sessionAuthenticated() {
    //     this._super(...arguments);
    //     this._loadCurrentUser();
    //   },
    //
    //   _loadCurrentUser() {
    //     return this.get('currentUser').load().catch(() => this.get('session').invalidate());
    // }

    session: Ember.inject.service(),
beforeModel: function() {
  return this.get('session').fetch().catch(function() {});
},
actions: {
  signIn: function(provider) {
    this.get('session').open('firebase', { provider: provider}).then(function(data) {
      console.log(data.currentUser);
    });
  },
  signOut: function() {
    this.get('session').close();
  }
}


});
