import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  session: Ember.inject.service('session'),
  authManager: Ember.inject.service('session'),

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');
      var users = this.get('model');
      var valid = false;
      for (var i = 0; i < users.content.length; i++)
      {
          if (login === users.content[i].__data.name && password === users.content[i].__data.pass) {
              valid = true;
          }
      }
      if (valid) {
          this.get('authManager').authenticate('authenticator:oauth2', login, password);
          this.set('currentUser', login);
      } else {
          alert('Wrong Login or Password');
      }
    },


  }
});
