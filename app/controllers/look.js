import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

  nameNotEmpty: Ember.computed.notEmpty('name'),
  gameNotEmpty: Ember.computed.notEmpty('game'),
  tldrNotEmpty: Ember.computed.notEmpty('tldr'),
  preferenceNotEmpty: Ember.computed.notEmpty('preference'),
  descriptionNotEmpty: Ember.computed.notEmpty('description'),
  tldrLength: Ember.computed.alias('tldr.length'),
  tldrValid: Ember.computed.lte('tldrLength', 140),
  bool1: Ember.computed.and('nameNotEmpty', 'gameNotEmpty'),
  bool2: Ember.computed.and('tldrNotEmpty', 'preferenceNotEmpty'),
  bool3: Ember.computed.and('descriptionNotEmpty', 'tldrValid'),
  bool4: Ember.computed.and('bool1', 'bool2'),

  isValid: Ember.computed.and('bool4', 'bool3'),

  isDisabled: Ember.computed.not('isValid'),

  name: '',
  game: '',
  tldr: '',
  preference: '',
  description: '',





  actions: {
    saveGroup() {
      const name = this.get('name');
      const game = this.get('game');
      const tldr = this.get('tldr');
      const preference = this.get('preference');
      const description = this.get('description');

      const newGroup = this.store.createRecord('group', { owner: 'Current User', name: name, game: game, description: description, tldr: tldr, preferences: preference});
      //Need to be replaced with actual current user variable

      newGroup.save();

      this.set('responseMessage', `Thank you! We've just made your group ${this.get('name')}, and it should appear on the feed page now.`);
      this.set('name', '');
      this.set('game', '');
      this.set('tldr', '');
      this.set('preference', '');
      this.set('description', '');
    }
  }
});
