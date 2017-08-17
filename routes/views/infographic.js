var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'infographic';
	locals.filters = {
		infographic: req.params.infographic,
	};
	locals.data = {
		infographics: [],
	};

	// Load the current infographic
	view.on('init', function (next) {
		var infographicSearch = {
			slug: locals.filters.infographic,
			state: 'published',
		};
		// allow admin user to see the infographic in all cases
		if (locals.user && locals.user.isAdmin) {
			delete infographicSearch.state;
		}

		var q = keystone.list('Infographic').model.findOne(infographicSearch).populate('author categories');

		q.exec(function (err, result) {
			locals.data.infographic = result;
			next(err);
		});

	});

	// Load other infographics
	view.on('init', function (next) {


		var categories = keystone.list('InfographicCategory').model.find().exec(function (err, categories) {
			if (err) {
				console.log(err);
				locals.data.categories = [];
			} else {
				locals.data.categories = categories;
			}

			var q = keystone.list('Infographic').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit(2);

			q.exec(function (err, results) {
				locals.data.infographics = results;
				console.log(results);
				console.log(err);
				next(err);
			});

			console.log(categories);
		});


	});
	// Render the view
	view.render('infographic');
};
