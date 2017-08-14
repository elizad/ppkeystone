
var path = '/v1/business-units/57ff44480000ff000595f84b/?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG';
var path2 = '/v1/business-units/57ff44480000ff000595f84b/reviews?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG';
var trustpilot = require('../../providers/trustpilot')(path);
var trustpilot2 = require('../../providers/trustpilot')(path2);
var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	console.log('tp2' + await trustpilot2.getData());

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.trustpilot = await trustpilot.getData() || {};

	locals.trustpilot2 = await trustpilot2.getData(path2) || {};
	try {
		var pensionreview = await keystone.list('Pensionreview').model.findOne().exec();
	} catch (error) {
		console.log(' ---------- ', error);
	}
	// item in the header navigation.
	locals.section = 'ppension';
	locals.filters = {
		pensionreview: req.params.pensionreview,
	};
	locals.data = {
		pensionreview,
	};
	//  Load pension review
	view.on('init', function (next) {
		next();
	});

	// Render the view
	view.render('ppension');
};
