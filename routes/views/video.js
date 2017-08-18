var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'videos';
	locals.filters = {
		video: req.params.video,
	};
	locals.data = {
		videos: [],
	};

	// Load the current video
	view.on('init', function (next) {
		var videoSearch = {
			slug: locals.filters.video,
			state: 'published',
		};
		// allow admin user to see the video in all cases
		if (locals.user && locals.user.isAdmin) {
			delete videoSearch.state;
		}

		var q = keystone.list('Video').model.findOne(videoSearch).populate('author categories');

		q.exec(function (err, result) {
			locals.data.video = result;
			next(err);
		});

	});

	// Load other videos
	view.on('init', function (next) {


		var categories = keystone.list('VideoCategory').model.find().exec(function (err, categories) {
			if (err) {
				console.log(err);
				locals.data.categories = [];
			} else {
				locals.data.categories = categories;
			}

			var q = keystone.list('Video').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit(2);

			q.exec(function (err, results) {
				locals.data.videos = results;
				console.log(results);
				console.log(err);
				next(err);
			});

			console.log(categories);
		});


	});
	// Render the view
	view.render('video');
};
