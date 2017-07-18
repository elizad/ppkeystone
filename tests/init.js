process.env.NODE_ENV = process.env.NODE_ENV || 'test';
require('dotenv').load();

var keystone = require('keystone');
var chai = require('chai');

keystone.init({
	'name': 'Profile Pensions',
	'brand': 'Profile Pensions',
	'views': 'templates/views',
	'view engine': 'pug',

	'session': true,
	'auth': true,

});
keystone.import('../models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('routes', require('../routes'));

keystone.set('nav', {

});
