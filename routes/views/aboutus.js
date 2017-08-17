var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var aboutus = {};	// assuming it should be an object
	try {
		aboutus = await keystone.list('AboutUs').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	// Init locals
	locals.section = 'aboutus';
	locals.filters = {
		aboutus: req.params.aboutus,
	};
	locals.data = {
		aboutus,
	};
	// Load
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('aboutus');
};
