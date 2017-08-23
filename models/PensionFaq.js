var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Pension review page
 * ===========
 */

var PensionFaq = new keystone.List('PensionFaq', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

PensionFaq.add({
	title: { type: String, required: true },
	longtitle: { type: String },
	breadcrumbstitle: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: { type: Types.Html, wysiwyg: true, height: 50 },
	question1: { type: String },
	answer1: { type: Types.Html, wysiwyg: true, height: 50 },
	question2: { type: String },
	answer2: { type: Types.Html, wysiwyg: true, height: 50 },
	question3: { type: String },
	answer3: { type: Types.Html, wysiwyg: true, height: 50 },
	question4: { type: String },
	answer4: { type: Types.Html, wysiwyg: true, height: 50 },
	question5: { type: String },
	answer5: { type: Types.Html, wysiwyg: true, height: 50 },
	question6: { type: String },
	answer6: { type: Types.Html, wysiwyg: true, height: 50 },
	question7: { type: String },
	answer7: { type: Types.Html, wysiwyg: true, height: 50 },
	question8: { type: String },
	answer8: { type: Types.Html, wysiwyg: true, height: 50 },
	question9: { type: String },
	answer9: { type: Types.Html, wysiwyg: true, height: 50 },
	question10: { type: String },
	answer10: { type: Types.Html, wysiwyg: true, height: 50 },
	question11: { type: String },
	answer11: { type: Types.Html, wysiwyg: true, height: 50 },
	question12: { type: String },
	answer12: { type: Types.Html, wysiwyg: true, height: 50 },
	metadata: {
		metatitle: { type: String },
		metadescription: { type: String },
		metakeywords: { type: String },
		metafbtitle: { type: String },
		metafbdescription: { type: String },
		metafbimageurl: { type: Types.CloudinaryImage },
		metatwittertitle: { type: String },
		metatwittercard: { type: String },
		metatwitterdescription: { type: String },
		metatwitterimageurl: { type: Types.CloudinaryImage },
	},
});

PensionFaq.defaultColumns = 'name, title';
PensionFaq.register();
