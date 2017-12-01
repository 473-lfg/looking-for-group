import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('feed');
  this.route('look');
  this.route('my_groups');
  this.route('about');
  this.route('login');
  this.route('unauthorized');
  this.route('sign-up');
  this.route('apply');
  this.route('applications');
});

export default Router;
