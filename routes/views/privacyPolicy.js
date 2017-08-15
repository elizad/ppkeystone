var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var privacypolicy = {};	// assuming pension should be an object
	try {
		privacypolicy = await keystone.list('PrivacyPolicy').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	// Init locals
	locals.section = 'privacy-policy';
	locals.filters = {
		privacypolicy: req.params.privacypolicy,
	};
	locals.data = {
		privacypolicy,
	};
	// Load the pension types
	view.on('init', function (next) {
		next();
	});
	view.render('privacyPolicy');
};
