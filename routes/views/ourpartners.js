var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var ourpartners = {};	// assuming ourpartners should be an object
	try {
		ourpartners = await keystone.list('OurPartners').model.findOne().exec();
	} catch (error) {
		console.log('could not find partners', error);
	}
	// Init locals
	locals.section = 'partners';
	locals.filters = {
		ourpartners: req.params.ourpartners,
	};
	locals.data = {
		ourpartners,
	};
	// Load the ourpartners type
	view.on('init', function (next) {
		next();
	});
	// Set locals
	view.render('ourpartners');
};
