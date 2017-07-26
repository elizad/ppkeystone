process.env.NODE_ENV = process.env.NODE_ENV || 'test';
require('dotenv').load();

var keystone = require('keystone');
var chai = require('chai');
console.log('in init file');
keystone.init({
	'name': 'Profile Pension',
	's3 config': {},
});
keystone.import('models');
var post = keystone.list('Post');
console.log(post);
chai.should();

// keystone.set('locals', {
// 	_: require('underscore'),
// 	env: keystone.get('env'),
// 	// utils: keystone.utils,
// 	// editable: keystone.content.editable,
// });
//
// keystone.set('routes', require('../routes'));
//
// keystone.set('nav', {
//
// });
