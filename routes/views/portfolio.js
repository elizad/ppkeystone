var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'portfolio';
	locals.filters = {
		post: req.params.post,
	};
	locals.data = {
		posts: [],
	};
	// Load the current post
	view.on('init', function (next) {
		var q = keystone.list('Portfolio').model.findOne({
			state: 'published',
			slug: locals.filters.post,
		}).populate('author categories');

		q.exec(function (err, result) {
			locals.data.post = result;
			next(err);
		});

	});

	// Load other posts
	view.on('init', function (next) {
		console.log('Portfolio t')
		var q = keystone.list('Portfolio').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');
		   console.log('Portfolio list')
		q.exec(function (err, results) {
			locals.data.posts = results;
			console.log
			next(err);
		});

	});

	// Render the view
	view.render('site/portfolioitem');

};
