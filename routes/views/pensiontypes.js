var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var pensions = {};
	try {
		var categories = await keystone.list('PensionCategory').model.find().exec();
		var categoriesById = [];
		categories.map((category) => {
			categoriesById[category._id] = category;
		});
		pensions = await keystone.list('Pension').model.find().exec();

		console.log(pensions);
	} catch (error) {
		console.log('could not find pension types ', error);
	}
		// Init locals
	locals.section = 'pension-types';
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		pensions,
		categories,
		categoriesById,
	};
	
	view.on('init', function (next) {
		next();
	});
		// Render View
	view.render('pensiontypes');
};
