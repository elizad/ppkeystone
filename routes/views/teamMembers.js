var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// set locals
	locals.section = 'meet-the-team';
	locals.filters = {
		teamcategory: req.params.category,
	};
	locals.data = {
		teamMembers: [],
		teamcategories: [],
	};
	// console.log(!{JSON.stringify(locals.data.teamcategories )})
	// Load the current category filter
	// view.on('init', function (next) {
    //
	// });
	// Load all categories
	view.on('init', function (next) {

		keystone.list('teamMemberCategory').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.teamcategories = results;

			// Load the counts for each category
			async.each(locals.data.teamcategories, function (category, next) {

				keystone.list('teamMember').model.count().where('teamcategories').in([category.id]).exec(function (err, count) {
					category.postCount = count;
					next(err);
				});

			}, function (err) {
				next(err);
			});
		});
	});

	// Load the current category filter
	view.on('init', function (next) {

		if (req.params.category) {
			keystone.list('teamMemberCategory').model.findOne({ key: locals.filters.category }).exec(function (err, result) {
				locals.data.category = result;
				next(err);
			});
		} else {
			next();
		}
	});


// Load team members
	view.query('teamMembers', keystone.list('teamMember').model.find());

	// Render View
	view.render('site/teamMembers');
};

