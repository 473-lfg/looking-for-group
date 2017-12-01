import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr('string'),
  name: DS.attr('string'),
  game: DS.attr('string'),
  description: DS.attr('string'),
  tldr: DS.attr('string'),
  preferences: DS.attr('string'),
  number_of_members: DS.attr('string')

});
