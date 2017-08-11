// var keystone = require('keystone');
//
// exports = module.exports = function (req, res) {
//
// 	var view = new keystone.View(req, res);
// 	var locals = res.locals;
//
// 	// Set locals
// 	locals.section = 'ppension';
//
//
// 	view.render('ppension');
// };

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
	console.log(locals);
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'ppension';

	// Render the view
	view.render('ppension');
};