

// var keystone = require('keystone');
const URL = require('url');

// reviews
const options = new URL('https://api.trustpilot.com/v1/business-units/57ff44480000ff000595f84b/reviews?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG');
const req = http.request(opticonst options = new URL('https://api.trustpilot.com/v1/business-units/57ff44480000ff000595f84b/reviews?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG');
ons, (res) => {
	// ...
	console.log(` status ok`);
	res.on('data', (chunk) => {
		console.log(`BODY: ${chunk}`);
	});
	res.on('end', () => {
		console.log('No more data in response.');
	});
});

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'trustpilotapi';
	//  locals.page.title = 'home';

	locals.tpapi = [
		{},
		{},
		{
			links: [
				
				{
					href: 'https://api.trustpilot.com/v1/business-units/57ff44480000ff000595f84b',
					method: 'GET',
					rel: 'business-units',
				},
				{
					href: 'https://api.trustpilot.com/v1/business-units/57ff44480000ff000595f84b/reviews?page=2&perPage=20&orderBy=createdat.desc&includeReportedReviews=false',
					method: 'GET',
					rel: 'next-page',
				},
			],
			reviews:
			[
				{ links: [
					{
						href: 'https://api.trustpilot.com/v1/reviews/5972071bfba87f08a8227ee9',
						method: 'GET',
						rel: 'reviews',
					},
					{
						href: 'https://api.trustpilot.com/v1/reviews/5972071bfba87f08a8227ee9/web-links',
						method: 'GET',
						rel: 'reviews-web-links',
					},
					{
						href: 'https://api.trustpilot.com/v1/resources/images/stars/5',
						method: 'GET',
						rel: 'resources-images-stars',
					},
				],
					id: '5972071bfba87f08a8227ee9',
					consumer: {
						links: [
							{
								href: 'https://api.trustpilot.com/v1/consumers/5972071a0000ff000ab2037e',
								method: 'GET',
								rel: 'consumers',
							},
						],
						id: '5972071a0000ff000ab2037e',
						displayName: 'Georgina Bowen',
						displayLocation: null,
						numberOfReviews: 2,
					},
					businessUnit: {
						links: [
							{
								href: 'https://api.trustpilot.com/v1/business-units/57ff44480000ff000595f84b',
								method: 'GET',
								rel: 'business-units',
							},
							{
								href: 'https://s3-eu-west-1.amazonaws.com/tpd/screenshotlogo-domain/57ff44480000ff000595f84b/57x43.png',
								method: 'GET',
								rel: 'profile-image-small',
							},
							{
								href: 'https://s3-eu-west-1.amazonaws.com/tpd/screenshotlogo-domain/57ff44480000ff000595f84b/118x89.png',
								method: 'GET',
								rel: 'profile-image-medium',
							},
							{
								href: 'https://s3-eu-west-1.amazonaws.com/tpd/screenshotlogo-domain/57ff44480000ff000595f84b/198x149.png',
								method: 'GET',
								rel: 'profile-image-large',
							},
						],
						id: '57ff44480000ff000595f84b',
						identifyingName: 'www.profilepensions.co.uk',
						displayName: 'Profile Pensions',
					},
					stars: 5,
					title: 'Very happy with the services',
					text: 'Very happy with the services',
					language: 'en',
					createdAt: '2017-07-21T13:52:26Z',
					updatedAt: null,
					companyReply: null,
					isVerified: true,
					numberOfLikes: 0,
					status: 'active',
					reportData: null,
					complianceLabels: [],
					countsTowardsTrustScore: true,
				},
			],
		},
	];
	// view.render('site/home');

};
