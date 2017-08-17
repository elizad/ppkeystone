var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var pensioncalculator = {};	// assuming pensioncalculator should be an object
	try {
		pensioncalculator = await keystone.list('PensionCalculator').model.findOne().exec();
	} catch (error) {
		console.log('could not find pensioncalculator', error);
	}
	// Init locals
	locals.section = 'pension-calculator';
	locals.filters = {
		pensioncalculator: req.params.pensioncalculator,
	};
	locals.data = {
		pensioncalculator,
	};
	// Load the pensioncalculator type
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('pensioncalculator');
};
