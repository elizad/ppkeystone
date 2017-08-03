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

		keystone.list('teamMemberCategory').model.find().sort('name').populate('categories').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.categories = results;

			// Load the counts for each category
			async.each(locals.data.categories, function (category, next) {
				keystone.list('teamMember').model.count().where('categories').in([category.id]).exec(function (err, count) {
					category.productCount = count;
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

	// Load the products
	view.on('init', function (next) {

		var q = keystone.list('teamMember').paginate({
			page: req.query.page || 1,
			perPage: 13,
			maxPages: 10,
		})
			.sort('title');
		// ≈;
		q.exec(function (err, results) {
			locals.data.products = results;
			console.log('Got results');
			console.log(results);
			next(err);
		});
	});

	// Render View
	view.render('site/teamMembers');
};

