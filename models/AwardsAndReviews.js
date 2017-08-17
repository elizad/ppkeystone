var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * awardsAndReviews page
 * ===========
 */

var awardsAndReviews = new keystone.List('AwardsAndReviews', {
	track: true,
	sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

awardsAndReviews.add({
	title: { type: String, required: true },
	longtitle: { type: String },
	breadcrumbstitle: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: { type: Types.Html, wysiwyg: true, height: 250 },
	s1title: { type: String },
	s1content1: { type: Types.Html, wysiwyg: true, height: 50 },
	s1content2: { type: Types.Html, wysiwyg: true, height: 50 },
	s1content3: { type: Types.Html, wysiwyg: true, height: 50 },
	s1content4: { type: Types.Html, wysiwyg: true, height: 50 },
	s1content5: { type: Types.Html, wysiwyg: true, height: 50 },
	s1content6: { type: Types.Html, wysiwyg: true, height: 50 },
	metadata: {
		metatitle: { type: String },
		metadescription: { type: String },
		metakeywords: { type: String },
		metafbtitle: { type: String },
		metafbdescription: { type: String },
		metafbimageurl: { type: String },
		metatwittertitle: { type: String },
		metatwittercard: { type: String },
		metatwitterdescription: { type: String },
		metatwitterimageurl: { type: String },
	},
});

awardsAndReviews.defaultColumns = 'name, title, categories';
awardsAndReviews.register();
