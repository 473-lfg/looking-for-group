import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        signUp() {
            const newName = this.get('newName');
            const newPass = this.get('newPass');
            const newUser = this.store.createRecord('user', {
                name: newName,
                pass: newPass
            })
            newUser.save();
            this.transitionToRoute('index');
        }
    }
});
