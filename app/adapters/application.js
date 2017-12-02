import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
    namespace: 'api',
    authorizer: 'authorizer:application'
});
