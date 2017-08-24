var path = '/v1/business-units/57ff44480000ff000595f84b/?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG';
var path2 = '/v1/business-units/57ff44480000ff000595f84b/reviews?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG';
var trustpilot = require('../../providers/trustpilot')(path);
var trustpilot2 = require('../../providers/trustpilot')(path2);
var keystone = require('keystone');


exports = module.exports = async function (req, res) {
	console.log('tp2' + await trustpilot2.getData());

	var view = new keystone.View(req, res);
	var index;
	var locals = res.locals;
	locals.trustpilot = await trustpilot.getData() || {};
	locals.trustpilot2 = await trustpilot2.getData(path2) || {};
	var carousels = {};
	// console.log(locals);
	// locals.section is used to set the currently selected
	// item in the header navigation.
	try {
		index = await keystone.list('Index').model.findOne().exec();
	} catch (error) {
		console.log('could not find index data', error);
	}
	try {
		carousels = await keystone.list('Carousel').model.find().exec();
		// console.log(carousels);
	} catch (error){
		console.log('could not find carousels', error);
	}
	// item in the header navigation.
	locals.section = 'home';
	locals.filters = {
		index: req.params.index,
		carousels: req.params.carousels,
	};
	locals.data = {
		index,
		carousels,
	};
	//  Load pension review
	view.on('init', function (next) {
		next();
	});
	// Render the view
	view.render('index');
};
