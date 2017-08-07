var keystone = require('keystone');
var trustpilot = require('../../providers/trustpilot')();

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.trustpilot = trustpilot.getData((data) => {
		// locals.section is used to set the currently selected
		// item in the header navigation.
		locals.trustpilot = data;
		locals.section = 'home';

		// Render the view
		view.render('site/index');
	});


};
