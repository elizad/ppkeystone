var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var pension = {};	// assuming pension should be an object
	var calltoaction;// assuming ourpartners should be an object
	try {
		calltoaction = await keystone.list('CallToAction').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	try {
		pension = await keystone.list('Pension').model.findOne().exec();
	} catch (error) {
		console.log('could not find pension', error);
	}
	// Init locals
	locals.section = 'pension-types';
	locals.filters = {
		pension: req.params.pension,
		calltoaction: req.params.calltoaction,
	};
	locals.data = {
		pension,
		calltoaction,
	};
	// Load the pension type
	view.on('init', function (next) {
		next();
	});

	// Render View
	view.render('pensiontype');
};


