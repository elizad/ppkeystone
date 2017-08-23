var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var ourpartners = {};
	var calltoaction = {};// assuming ourpartners should be an object
	try {
		ourpartners = await keystone.list('OurPartners').model.findOne().exec();
	} catch (error) {
		console.log('could not find partners', error);
	}
	try {
		calltoaction = await keystone.list('CallToAction').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	// Init locals
	locals.section = 'partners';
	locals.filters = {
		ourpartners: req.params.ourpartners,
		calltoaction: req.params.calltoaction,
	};
	locals.data = {
		ourpartners,
		calltoaction,
	};
	// Load the ourpartners type
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('ourpartners');
};
