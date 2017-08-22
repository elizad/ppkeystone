var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var processes = {};	// assuming pension should be an object
	try {
		processes = await keystone.list('Steps').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	// Init locals
	locals.section = 'processes';
	locals.filters = {
		processes: req.params.processes,
	};
	locals.data = {
		processes,
	};
	// Load the pension types
	view.on('init', function (next) {
		next();
	});
	view.render('processes');
};
