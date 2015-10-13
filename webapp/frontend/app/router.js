import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {

  this.resource('user', function() {
		// /user/login
		this.route('login');
		// /user/logout
		this.route('logout');
	});
  this.resource('lambda-instances');
});

export default Router;
