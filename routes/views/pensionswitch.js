var path = '/v1/business-units/57ff44480000ff000595f84b/?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG';
var path2 = '/v1/business-units/57ff44480000ff000595f84b/reviews?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG';
var trustpilot = require('../../providers/trustpilot')(path);
var trustpilot2 = require('../../providers/trustpilot')(path2);
var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	var pensionswitch;
	var carousels;
	var processes = {};	// assuming it should be an object

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.trustpilot = await trustpilot.getData() || {};

	locals.trustpilot2 = await trustpilot2.getData(path2) || {};
	try {
		pensionswitch = await keystone.list('PensionSwitch').model.findOne().exec();
	} catch (error) {
		console.log('could not find pension switch ', error);
	}
	try {
		carousels = await keystone.list('Carousel').model.find().exec();
		// console.log(carousels);
	} catch (error){
		console.log('could not find carousels', error);
	}
	try {
		processes = await keystone.list('Steps').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	// item in the header navigation.
	locals.section = 'pension-switch';
	locals.filters = {
		pensionswitch: req.params.pensionswitch,
		carousels: req.params.carousels,
		processes: req.params.processes,
	};
	locals.data = {
		pensionswitch,
		carousels,
		processes,
	};
	//  Load pension review
	view.on('init', function (next) {
		next();
	});

	// Render the view
	view.render('pensionswitch');
};
