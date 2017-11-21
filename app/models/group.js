import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  tldr: DS.attr('string'),
  preferences: DS.attr('string'),
  number_of_members: DS.attr('number'),
  members: DS.attr()

});
