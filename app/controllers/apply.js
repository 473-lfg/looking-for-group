import Controller from '@ember/controller';

export default Controller.extend({
  methodNotEmpty: Ember.computed.notEmpty('method'),
  contactNotEmpty: Ember.computed.notEmpty('contact'),
  textNotEmpty: Ember.computed.notEmpty('text'),
  bool1: Ember.computed.and('methodNotEmpty', 'contactNotEmpty'),
  isValid: Ember.computed.and('bool1', 'textNotEmpty'),
  isDisabled: Ember.computed.not('isValid'),

  method: '',
  contact: '',
  text: '',

  actions: {
    submitApplication() {
      const method = this.get('method');
      const contact = this.get('contact');
      const text = this.get('text');
      const name = 'Group Name';
      const owner = 'Current User';
        //Need to be replaced with actual current user variable

      const newApplication = this.store.createRecord('application', { owner: owner, name: name, contactMethod: method, contact: contact, application: text});


      newApplication.save();

      this.set('responseMessage', `Thank you! They've received your application.`);
      this.set('method', '');
      this.set('contact', '');
      this.set('text', '');
    }
  }
});
