var keystone = require('keystone');
var async = require('async');
var numeral = require('numeral');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'meet-the-team';
	locals.numeral = numeral;
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		teamMembers: [],
		categories: [],
	};
	
	// Load all categories
	view.on('init', function (next) {

		keystone.list('teamMemberCategory').model.find().sort('createdDate').populate('categories').exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}
			locals.data.categories = results;
			console.log(results.name);
			// Load the counts for each category
			async.each(locals.data.categories, function (category, next) {
				keystone.list('teamMember').model.count().where('categories').in([category.id]).exec(function (err, count) {
					category.teamMemberCount = count;
					console.log('Got categ count' + count);
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
				console.log('Got result team cat');
				console.log(result);
				next(err);
			});
		} else {
			next();
		}

	});
	// Load the team Members
	view.on('init', function (next) {

		var q = keystone.list('teamMember').paginate({
			page: req.query.page || 1,
			perPage: 13,
			maxPages: 10,
		})
			.sort('title');
		q.exec(function (err, results) {
			locals.data.teamMembers = results;
			console.log('Got results');
			console.log(results);
			next(err);
		});
	});

	// Render View
	view.render('site/teamMembers');
};

