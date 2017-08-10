var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'blog';
	locals.filters = {
		post: req.params.post,
	};
	locals.data = {
		posts: [],
	};

	// Load the current post
	view.on('init', function (next) {
		var postSearch = {
			slug: locals.filters.post,
			state: 'published',
		};

		// allow admin user to see the post in all cases
		if (locals.user && locals.user.isAdmin) {
			delete postSearch.state;
		}

		var q = keystone.list('Post').model.findOne(postSearch).populate('author categories');

		q.exec(function (err, result) {
			locals.data.post = result;
			next(err);
		});

	});

	// Load other posts
	view.on('init', function (next) {

		// 

		var categories = keystone.list('PostCategory').model.find().exec(function(err, categories) {
			if(err) {
				console.log(err);
				locals.data.categories = [];
			} else {
				locals.data.categories = categories;
			}
			
			var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit(2);

			q.exec(function (err, results) {
				locals.data.posts = results;
				console.log(results);
				console.log(err);
				next(err);
			});
			
			console.log(categories);
		})

		
		

	})
	// Render the view
	view.render('post');
};
