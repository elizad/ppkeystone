var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'meetTheTeamMember';

	// Load the galleries by sortOrder
	view.query('meetTheTeam', keystone.list('MeetTheTeamMember').model.find().sort('sortOrder'));

	// Render the view
	view.render('site/meetTheTeamMember');

};
