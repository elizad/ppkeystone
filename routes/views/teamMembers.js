var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	try {
		var categories = await keystone.list('teamMemberCategory').model.find().exec();
		var categoriesById = [];
		categories.map((category) => {
			categoriesById[category._id] = category;
		});
		var teamMembers = await keystone.list('teamMember').model.find().exec();
	} catch (error) {
		console.log(' could not find teamMember ', error);
	}
	// Init locals
	locals.section = 'meet-the-team';
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		teamMembers,
		categories,
		categoriesById,
	};
	// Load the team Members
	view.on('init', function (next) {
		next();
	});

	// Render View
	view.render('teamMembers');
};

