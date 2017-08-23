var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var calltoaction = {};	// assuming it should be an object
	try {
		calltoaction = await keystone.list('CallToAction').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	var pensionfaqs = {};	// assuming it should be an object
	try {
		pensionfaqs = await keystone.list('PensionFaq').model.findOne().exec();
	} catch (error) {
		console.log('cound not find ', error);
	}
	// Init locals
	locals.section = 'complaints-process';
	locals.filters = {
		calltoaction: req.params.calltoaction,
		pensionfaqs: req.params.pensionfaqs,
	};
	locals.data = {
		pensionfaqs,
		calltoaction,
	};
	// Load
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('pensionfaqs');
};
