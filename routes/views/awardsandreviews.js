var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var awardsandreviews = {};	// assuming it should be an object
	try {
		awardsandreviews = await keystone.list('AwardsAndReviews').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	// Init locals
	locals.section = 'awards-and-reviews';
	locals.filters = {
		awardsandreviews: req.params.awardsandreviews,
	};
	locals.data = {
		awardsandreviews,
	};
	// Load
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('awardsandreviews');
};

