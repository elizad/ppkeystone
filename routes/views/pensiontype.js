var keystone = require('keystone');

// exports = module.exports = function (req, res) {
//
// 	var view = new keystone.View(req, res);
// 	var locals = res.locals;
//
// 	// Set locals
// 	locals.section = 'pensiontype';
// 	view.render('pensiontype');
// };


exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	// Set locals
	locals.section = 'pension-types';

	locals.filters = {
		pension: req.params.pension,
	};
	locals.data = {
		pensions: [],
		//categories: [],
	};
	// Load the current post

	view.on('init', function (next) {
		var q = keystone.list('Pension').model.findOne({
			slug: locals.filters.pension,
		});
    //
	// 	var postSearch = {
	// 		slug: locals.filters.pensions,
	// 		state: 'published',
	// 	};
	// 	// allow admin user to see the post in all cases
	// 	if (locals.user && locals.user.isAdmin) {
	// 		delete postSearch.state;
	// 	}
    //
		q.exec(function (err, result) {
			locals.data.pension = result;
			next(err);
			console.log(result);
		});

	});

	// // Load other posts

	// Render the view
	view.render('pensiontype');
};


