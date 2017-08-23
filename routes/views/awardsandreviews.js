var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var awardsandreviews = {};	// assuming it should be an object
	var calltoaction = {};
	try {
		calltoaction = await keystone.list('CallToAction').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	try {
		awardsandreviews = await keystone.list('AwardsAndReviews').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	// Init locals
	locals.section = 'awards-and-reviews';
	locals.filters = {
		awardsandreviews: req.params.awardsandreviews,
		calltoaction: req.params.calltoaction,
	};
	locals.data = {
		awardsandreviews,
		calltoaction,
	};
	// Load
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('awardsandreviews');
};

