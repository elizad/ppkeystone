var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var calltoaction = {};	// assuming it should be an object
	try {
		calltoaction = await keystone.list('CallToAction').model.findOne().exec();
		console.log(calltoaction);
	} catch (error) {
		console.log('could not find ', error);
	}
	var complaintsprocess = {};	// assuming it should be an object
	try {
		complaintsprocess = await keystone.list('ComplaintsProcess').model.findOne().exec();
		console.log(complaintsprocess);
	} catch (error) {
		console.log('cound not find ', error);
	}
	// Init locals
	locals.section = 'complaints-process';
	locals.filters = {
		calltoaction: req.params.calltoaction,
		complaintsprocess: req.params.complaintsprocess,
	};
	locals.data = {
		complaintsprocess,
		calltoaction,
	};
	// Load
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('complaintsprocess');
};
