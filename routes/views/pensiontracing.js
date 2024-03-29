var path = '/v1/business-units/57ff44480000ff000595f84b/?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG';
var path2 = '/v1/business-units/57ff44480000ff000595f84b/reviews?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG';
var trustpilot = require('../../providers/trustpilot')(path);
var trustpilot2 = require('../../providers/trustpilot')(path2);
var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	console.log('tp2' + await trustpilot2.getData());

	var view = new keystone.View(req, res);
	var pensiontracing;
	var calltoaction = {};
	var carousels = {};
	var processes = {};
	var locals = res.locals;
	locals.trustpilot = await trustpilot.getData() || {};
	locals.trustpilot2 = await trustpilot2.getData(path2) || {};
	try {
		pensiontracing = await keystone.list('Pensiontracing').model.findOne().exec();
	} catch (error) {
		console.log('could not find pension tracing', error);
	}
	try {
		calltoaction = await keystone.list('CallToAction').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	try {
		carousels = await keystone.list('Carousel').model.find().exec();
		// console.log(carousels);
	} catch (error) {
		console.log('could not find carousels', error);
	}
	var processes = {};	// assuming pension should be an object
	try {
		processes = await keystone.list('Steps').model.findOne().exec();
	} catch (error) {
		console.log('could not find ', error);
	}
	// item in the header navigation.
	locals.section = 'pension-tracing';
	locals.filters = {
		pensiontracing: req.params.pensiontracing,
		calltoaction: req.params.calltoaction,
		carousels: req.params.carousels,
		processes: req.params.processes,
	};
	locals.data = {
		pensiontracing,
		calltoaction,
		carousels,
		processes,
	};
	//  Load pension review
	view.on('init', function (next) {
		next();
	});

	// Render the view
	view.render('pensiontracing');
};
