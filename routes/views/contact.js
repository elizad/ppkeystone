var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var contacts = {};
	try {
		var categories = await keystone.list('ContactCategory').model.find().exec();
		contacts = await keystone.list('Contact').model.find().exec();

		// console.log(contacts);
	} catch (error) {
		console.log('could not find contact types ', error);
	}
	// Init locals
	locals.section = 'contact';
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		contacts,
		categories,
	};
	// Load contacts
	view.on('init', function (next) {
		next();
	});
	// Render View
	view.render('contact');
};
