import Controller from '@ember/controller';
import Ember from 'ember';


export default Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),


  reverse: function(){
        return this.get('model').toArray().reverse();
    }.property('model.[]'),

    actions: {
    apply(ownerOfGroupAppliedTo, nameOfGroup) {

        //set global variables, then go to application route

        this.transitionToRoute('apply', {queryParams: { owner: ownerOfGroupAppliedTo, name: nameOfGroup}});
      }
    }
});
