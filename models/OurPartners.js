var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * getStarted page
 * ===========
 */

var getStarted = new keystone.List('GetStarted', {
	track: true,
	sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

getStarted.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	getstartedTitle: { type: String },
	getstartedContent: { type: Types.Html, wysiwyg: true, height: 250 },
	getstartedReferal: { type: String },
	s1title: { type: String },
	s1content1: { type: Types.Html, wysiwyg: true, height: 50 },
	s1content2: { type: Types.Html, wysiwyg: true, height: 50 },
	s1content3: { type: Types.Html, wysiwyg: true, height: 50 },
	s2title: { type: String },
	s2feature1: { type: String },
	s2feature1svg: { type: String },
	s2feature2: { type: String },
	s2feature2svg: { type: String },
	s2feature3: { type: String },
	s2feature3svg: { type: String },
	s3title: { type: String },
	s3content: { type: Types.Html, wysiwyg: true, height: 250 },
	s4title: { type: String },
	s4content1: { type: Types.Html, wysiwyg: true, height: 250 },
	s4content2: { type: Types.Html, wysiwyg: true, height: 250 },
	s4content3: { type: Types.Html, wysiwyg: true, height: 250 },
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

getStarted.defaultColumns = 'name, title';
getStarted.register();
