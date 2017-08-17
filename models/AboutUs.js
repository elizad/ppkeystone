var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * aboutUs page
 * ===========
 */

var aboutUs = new keystone.List('AboutUs', {
	track: true,
	sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

aboutUs.add({
	title: { type: String, required: true },
	longtitle: { type: String },
	breadcrumbstitle: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	s1title: { type: String },
	s1content: { type: Types.Html, wysiwyg: true, height: 250 },
	s1video: { type: String },
	s1videoimage: { type: String },
	s2title: { type: String },
	s2content: { type: Types.Html, wysiwyg: true, height: 250 },
	s2feature1: { type: String },
	s2feature1text: { type: String },
	s2feature2: { type: String },
	s2feature2text: { type: String },
	s2feature3: { type: String },
	s2feature3text: { type: String },
	s2feature4: { type: String },
	s2feature4text: { type: String },
	s2button: { type: String },
	s3title: { type: String },
	s3content: { type: Types.Html, wysiwyg: true, height: 250 },
	s3button: { type: String },
	s4title: { type: String },
	s4content: { type: Types.Html, wysiwyg: true, height: 250 },
	s4button: { type: String },
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

aboutUs.defaultColumns = 'name, title, categories';
aboutUs.register();
