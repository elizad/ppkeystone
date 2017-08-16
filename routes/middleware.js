/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');

/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/

exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		// { label: 'Home', key: 'home', href: '/' },
		{ label: 'Content Hub', key: 'content-hub', href: '/content-hub' },
		{ label: 'What We Do', key: 'pension-types', pages: [
				{ label: 'Find Your Pension', subkey: 'findyourpension', href: '/#' },
				{ label: 'Switching you to the best pension', subkey: 'pensionswitch', href: '/pension-switch' },
		] },
		{ label: 'About Pensions', key: 'aboutpension', pages: [
			{ label: 'Pension Calculator', subkey: 'pensioncalculator', href: '/pension-calculator' },
			{ label: 'Content Hub', key: 'contenthub', href: '/content-hub' },
			{ label: 'Pensions We Review', subkey: 'pension-types', href: '/pension-types/' },
			{ label: 'What is a Pension Review', subkey: 'pensionreview', href: '/pension-review/' },
			{ label: 'What is aPension Tracking', subkey: 'pensiontraking', href: '/pension-tracking/' },
		] },
		{ label: 'About Us', key: 'about', pages: [
			{ label: 'Meet The Team', key: 'meet-the-team', href: '/meet-the-team/' },
			{ label: 'How It Works', subkey: 'processes', href: '/processes/' },
			{ label: 'Awards and review', subkey: 'awards-and-reviews', href: '/awards-and-reviews/' },
			{ label: 'Our Partner', subkey: 'partners', href: '/partners/' },
			{ label: 'Contact', key: 'contact', href: '/contact/' },
		] },
		{ label: 'Find Pensions ', key: 'getstarted', href: '/get-started-trace' },
	];
	res.locals.user = req.user;
	res.locals.baseUrl = req.keystone.get('baseUrl');

	next();
};

/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};

/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
