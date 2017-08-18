var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'newss';
	locals.filters = {
		new: req.params.new,
	};
	locals.data = {
		news: [],
	};

	// Load the current new
	view.on('init', function (next) {
		var newSearch = {
			slug: locals.filters.new,
			state: 'published',
		};
		// allow admin user to see the new in all cases
		if (locals.user && locals.user.isAdmin) {
			delete newSearch.state;
		}

		var q = keystone.list('News').model.findOne(newSearch).populate('author categories');

		q.exec(function (err, result) {
			locals.data.new = result;
			next(err);
		});

	});

	// Load other news
	view.on('init', function (next) {


		var categories = keystone.list('NewsCategory').model.find().exec(function (err, categories) {
			if (err) {
				console.log(err);
				locals.data.categories = [];
			} else {
				locals.data.categories = categories;
			}

			var q = keystone.list('News').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit(2);

			q.exec(function (err, results) {
				locals.data.news = results;
				console.log(results);
				console.log(err);
				next(err);
			});

			console.log(categories);
		});


	});
	// Render the view
	view.render('news');
};
