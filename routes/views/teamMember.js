var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'meet-the-team';
	locals.filters = {
		teamMember: req.params.teamMember,
	};
	locals.data = {
		teamMembers: [],
	};

	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('teamMember').model.findOne({
			// state: 'published',
			slug: locals.filters.teamMember,
		});
			// .populate('author categories');

		q.exec(function (err, result) {
			locals.data.teamMember = result;
			next(err);
		});

	});

	// // Load other posts

	// Render the view
	view.render('site/teamMember');
};

