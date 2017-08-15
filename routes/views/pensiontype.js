var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var pension = {};	// assuming pension should be an object
	try {
		pension = await keystone.list('Pension').model.findOne().exec();
	} catch (error) {
		console.log('could not find pension', error);
	}
	// Init locals
	locals.section = 'pension-types';
	locals.filters = {
		pension: req.params.pension,
	};
	locals.data = {
		pension,
	};
	// Load the pension type
	view.on('init', function (next) {
		next();
	});

	// Render View
	view.render('pensiontype');
};

