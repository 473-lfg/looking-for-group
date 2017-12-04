import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  reverse: function(){
        return this.get('model').toArray().reverse();
    }.property('model.[]'),
});
