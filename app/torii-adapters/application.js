import ToriiFireAdapter from 'emberfire/torii-adapters/firebase';
export default ToriiFireAdapter.extend({
  firebase: Ember.inject.service()
});
