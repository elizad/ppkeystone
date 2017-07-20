var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'teammember';

	// Load the teammembers by sortOrder
	view.query('teammember', keystone.list('TeamMember').model.find().sort('sortOrder'));

	// Render the view
	view.render('site/teammember');

};


