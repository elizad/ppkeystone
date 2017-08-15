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
	// Load the current Team Member
	view.on('init', function (next) {
        //
		var q = keystone.list('teamMember').model.findOne({
			state: 'published',
			slug: locals.filters.teamMember,
		});

		var memberSearch = {
			slug: locals.filters.teamMember,
			state: 'published',
		};
		if (locals.user && locals.user.isAdmin) {
			delete memberSearch.state;
		}
		q.exec(function (err, result) {
			locals.data.teamMember = result;
			next(err);
		});

	});
	// Render the view
	view.render('teamMember');
};

