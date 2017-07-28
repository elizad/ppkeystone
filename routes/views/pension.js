var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'pension';

	// Load the people by sortOrder
	view.query('pensions', keystone.list('Pension').model.find().sort('sortOrder'));

	// Render the view
	view.render('site/pension');

};
