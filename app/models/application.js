import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  contactMethod: DS.attr('string'),
  contact: DS.attr('string'),
  application: DS.attr('string'),
  owner: DS.attr('string')

});
