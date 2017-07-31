var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// set locals
	locals.section = 'meet-the-team';
	locals.filters = {
		// teammembercategory: req.params.category,
	};
	locals.data = {
		teamMembers: [],
		teamcategories: [],
	};
	console.log(locals.data);


	// Load the current category filter
	// view.on('init', function (next) {
    //
	// });


// Load team members
	view.query('teamMembers', keystone.list('teamMember').model.find());

	// Render View
	view.render('site/teamMembers');
};

