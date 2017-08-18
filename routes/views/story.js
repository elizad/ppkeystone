var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'story';
	locals.filters = {
		story: req.params.story,
	};
	locals.data = {
		storys: [],
	};

	// Load the current story
	view.on('init', function (next) {
		var storySearch = {
			slug: locals.filters.story,
			state: 'published',
		};
		// allow admin user to see the story in all cases
		if (locals.user && locals.user.isAdmin) {
			delete storySearch.state;
		}

		var q = keystone.list('Story').model.findOne(storySearch).populate('author categories');

		q.exec(function (err, result) {
			locals.data.story = result;
			next(err);
		});

	});

	// Load other storys
	view.on('init', function (next) {


		var categories = keystone.list('StoryCategory').model.find().exec(function (err, categories) {
			if (err) {
				console.log(err);
				locals.data.categories = [];
			} else {
				locals.data.categories = categories;
			}

			var q = keystone.list('Story').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit(2);

			q.exec(function (err, results) {
				locals.data.storys = results;
				console.log(results);
				console.log(err);
				next(err);
			});

			console.log(categories);
		});


	});
	// Render the view
	view.render('story');
};
