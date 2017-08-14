var keystone = require('keystone');

exports = module.exports = async function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	try {
		var pension = await keystone.list('Pension').model.findOne().exec();
		console.log(pension);
	} catch (error) {
		console.log(' ---------- ', error);
	}
	// Init locals
	locals.section = 'pension-types';
	locals.filters = {
		pension: req.params.pension,
	};
	locals.data = {
		pension,
	};
	// Load the pension types
	view.on('init', function (next) {
		next();
	});

	// Render View
	view.render('pensiontype');
};

