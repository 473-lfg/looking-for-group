import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({

  session: Ember.inject.service('session'),
  authManager: Ember.inject.service('session'),

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');
      this.get('authManager').authenticate('authenticator:oauth2', login, password).then(() => {
        alert('Success! Click the top link!');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    },

    invalidateSession() {
        this.get('session').invalidate();
    }

  }
});
