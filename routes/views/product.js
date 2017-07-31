var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals - res.locals is passed to the top-level component you render as props like in react
	// The default local variables to pass to your view templates
	locals.section = 'store';
	locals.filters = {
		product: req.params.product,
	};
	locals.data = {
		products: [],
		categories: [],
	};

	view.on('init', function (next) {
		var q = keystone.list('Product').model.findOne({
			slug: locals.filters.product,
		});

		q.exec(function (err, result) {
			locals.data.product = result;
			next(err);
		});
	});

	// Render View
	view.render('site/product');
};
