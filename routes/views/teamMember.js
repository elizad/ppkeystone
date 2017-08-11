var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	// Set locals
	locals.section = 'team-members';
	locals.filters = {
		teamMember: req.params.teamMember,
	};
	locals.data = {
		teamMembers: [],
		categories: [],
	};
	// Load the current post
	view.on('init', function (next) {
        //
		var q = keystone.list('teamMember').model.findOne({
			state: 'published',
			slug: locals.filters.teamMember,
		});

		var postSearch = {
			slug: locals.filters.teamMember,
			state: 'published',
		};
			// allow admin user to see the post in all cases
		if (locals.user && locals.user.isAdmin) {
			delete postSearch.state;
		}
			// .populate('author categories');
		q.exec(function (err, result) {
			locals.data.teamMember = result;
			next(err);
		});

	});

	// // Load other posts

	// Render the view
	view.render('teamMember');
};

