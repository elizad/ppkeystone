var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'beginner-guide';
	locals.filters = {
		beginnerguide: req.params.beginnerguide,
	};
	locals.data = {
		beginnerguides: [],
	};

	// Load the current beginnerguide
	view.on('init', function (next) {
		var beginnerguideSearch = {
			slug: locals.filters.beginnerguide,
			state: 'published',
		};
		// allow admin user to see the beginnerguide in all cases
		if (locals.user && locals.user.isAdmin) {
			delete beginnerguideSearch.state;
		}

		var q = keystone.list('BeginnerGuide').model.findOne(beginnerguideSearch).populate('author categories');

		q.exec(function (err, result) {
			locals.data.beginnerguide = result;
			next(err);
		});

	});

	// Load other beginnerguides
	view.on('init', function (next) {


		var categories = keystone.list('BeginnerGuideCategory').model.find().exec(function (err, categories) {
			if (err) {
				console.log(err);
				locals.data.categories = [];
			} else {
				locals.data.categories = categories;
			}

			var q = keystone.list('BeginnerGuide').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit(2);

			q.exec(function (err, results) {
				locals.data.beginnerguides = results;
				console.log(results);
				console.log(err);
				next(err);
			});

			console.log(categories);
		});


	});
	// Render the view
	view.render('beginnerguide');
};
