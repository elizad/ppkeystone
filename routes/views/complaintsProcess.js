var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var complaintsprocess = {};	// assuming it should be an object
	try {
		complaintsprocess = await keystone.list('ComplaintsProcess').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	// Init locals
	locals.section = 'complaints-process';
	locals.filters = {
		complaintsprocess: req.params.complaintsprocess,
	};
	locals.data = {
		complaintsprocess,
	};
	// Load
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('complaintsprocess');
};
