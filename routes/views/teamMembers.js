var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// set locals
	locals.section = 'meet-the-team';
	// locals.filters = {
	// 	teammembercategory: req.params.category,
	// };
	locals.data = {
		teamMembers: [],
		// teammembercategories: [],
	};
	// Load all categories
	// view.on('init', function (next) {
    //
	// 	keystone.list('teamMemberCategory').model.find().sort('name').populate('teamcategories').exec(function (err, results) {
    //
	// 		if (err || !results.length) {
	// 			return next(err);
	// 		}
    //
	// 		locals.data.teammembercategories = results;
    //
	// 	}, function (err) {
	// 		next(err);
	// 	});
    //
	// });
	// Load the current category filter
	// view.on('init', function (next) {
    //
	// });


// Load team members
	view.query('teamMembers', keystone.list('teamMember').model.find());

	// Render View
	view.render('site/teamMembers');
};

