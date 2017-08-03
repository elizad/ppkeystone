// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
// add a new custom Field Type
// Object.defineProperty(
// 	keystone.Field.Types,
// 	'Preview',
// 	{
// 		get: function () {
// 			return require('./routes/views/preview.js');
// 		},
// 	}
// );


keystone.init({
	'name': 'ProfilePension',
	'brand': 'ProfilePension',
	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',
	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	products: 'products',
	teamMembers: ['team-members', 'team-member-categories'],
	pensions: 'pensions',
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
	//people: 'people',
});

// Start Keystone to connect to your database and initialise the web server


// if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
// 	console.log('----------------------------------------'
// 	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
// 	+ '\n----------------------------------------'
// 	+ '\nYou have opted into email sending but have not provided'
// 	+ '\nmailgun credentials. Attempts to send will fail.'
// 	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
// 	+ '\nset up your mailgun integration');
// }


keystone.start();
