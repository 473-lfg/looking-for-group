import Controller from '@ember/controller';

export default Controller.extend({

  name: '',
  game: '',
  tldr: '',
  text: '',
  preference: '',
  description: '',
  number_of_members: '',





  actions: {
    saveGroup() {
      const name = this.get('name');
      const game = this.get('game');
      const tldr = this.get('tldr');
      const preference = this.get('preference');
      const description = this.get('description');
      const number_of_members = this.get('number_of_members');

      const newGroup = this.store.createRecord('group', { name: name, game: game, description: description, tldr: tldr, preferences: preference, number_of_members: number_of_members});

      newGroup.save();

      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
