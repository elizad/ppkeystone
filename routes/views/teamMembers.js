var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// set locals
	locals.section = 'meet-the-team';

	// Load team members
	view.query('teamMembers', keystone.list('teamMember').model.find());

	// Render View
	view.render('site/teamMembers');
};
