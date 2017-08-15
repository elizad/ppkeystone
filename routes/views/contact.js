var keystone = require('keystone');

// exports = module.exports = function (req, res) {
//
// 	var view = new keystone.View(req, res);
// 	var locals = res.locals;
exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var contact = {};	// assuming should be an object
	try {
		contact = await keystone.list('Contact').model.findOne().exec();
	} catch (error) {
		console.log('could not find contact', error);
	}
	// Init locals
	locals.section = 'contact';
	locals.filters = {
		contact: req.params.contact,
	};
	locals.data = {
		contact,
	};
	// Load the contacts
	view.on('init', function (next) {
		next();
	});
	// Render Views
	view.render('contact');
};
