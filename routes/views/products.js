var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'store';
	locals.filters = {
		product: req.params.product,
	};
	locals.data = {
		products: [],
		categories: [],
	};

	// load all categories
	view.on('init', function (next) {
		keystone.list(ProductCategory).model.find().sort('title').exec(
			function (err, results) {
				if (err || !results.length) {
					return next(err);
				}
				locals.data.categories = results;
			}
		);
	});
	// load current category filter
	view.on('init', function (next) {

		if (req.params.category) {
			keystone.list('ProductCategory').model.findOne({ key: locals.filters.category }).exec(function (err, result) {
				locals.data.category = result;
				next(err);
			});
		} else {
			next();
		}
	});


	// Load Products
//	view.query('products', keystone.list('Product').model.find());
	view.on('init', function (next) {

		var q = keystone.list('Product').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10,
			filters: {
				state: 'published',
			},
		})
			.sort('-publishedDate')
			.populate('author categories');

		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}

		q.exec(function (err, results) {
			locals.data.products = results;
			next(err);
		});
	});

	// Render View
	view.render('site/products');
};
