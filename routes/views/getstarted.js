var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var getstarted = {};	// assuming getstarted should be an object
	try {
		getstarted = await keystone.list('GetStarted').model.findOne().exec();
	} catch (error) {
		console.log('could not find getstarted', error);
	}
	// Init locals
	locals.section = 'get-started-trace';
	locals.filters = {
		getstarted: req.params.getstarted,
	};
	locals.data = {
		getstarted,
	};
	// Load the getstarted type
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('getstarted');
};
