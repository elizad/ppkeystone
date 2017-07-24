var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'people';

	// Load the people by sortOrder
	view.query('peoples', keystone.list('People').model.find().sort('sortOrder'));

	// Render the view
	view.render('site/people');

};
