/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/pension-switch', routes.views.pensionswitch);
	app.get('/pension-calculator', routes.views.pensioncalculator);
	app.get('/beginner-guides/:category?', routes.views.beginnerguides);
	app.get('/beginner-guides/beginner-guide/:beginnerguide', routes.views.beginnerguide);
	app.get('/content-hub/:category?', routes.views.blog);
	app.get('/content-hub/post/:post', routes.views.post);
	app.get('/infographics/:category?', routes.views.infographics);
	app.get('/infographics/infographic/:infographic', routes.views.infographic);
	app.get('/pension-types', routes.views.pensiontypes);
	app.get('/pension-types/:pensiontype', routes.views.pensiontype);
	app.get('/about-us', routes.views.aboutus);
	app.get('/meet-the-team/', routes.views.teamMembers);
	app.get('/meet-the-team/:teamMember', routes.views.teamMember);
	app.get('/processes', routes.views.processes);
	app.get('/pension-review', routes.views.ppension);
	app.get('/pension-tracing', routes.views.pensiontracing);
	app.get('/about-us/awards-and-reviews/', routes.views.awardsandreviews);
	app.get('/partners', routes.views.ourpartners);
	app.get('/contact', routes.views.contact);
	app.all('/get-started-trace', routes.views.getstarted);
	app.get('/complaints-process', routes.views.complaintsProcess);
	app.get('/privacy-policy', routes.views.privacyPolicy);
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
