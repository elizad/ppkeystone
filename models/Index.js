var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * index page
 * ===========
 */

var index = new keystone.List('Index', {
	track: true,
	sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

index.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	s1title: { type: String },
	s1content: { type: Types.Html, wysiwyg: true, height: 250 },
	s1button: { type: String },
	s1buttonlink: { type: String },
	s2feature1: { type: String },
	s2feature2: { type: String },
	s2feature3: { type: String },
	s2feature4: { type: String },
	s3steptitle: { type: String },
	s3step1: { type: String },
	s3step2: { type: String },
	s3step3: { type: String },
	s3buttontext: { type: String },
	s3buttonlink: { type: String },
	s3modaltext: { type: String },
	s3modaltitle: { type: String },
	s3modalsubtitle: { type: String },
	s3modalcontent: { type: Types.Html, wysiwyg: true, height: 150 },
	s4title: { type: String },
	s4promise1: { type: String },
	s4promise2: { type: String },
	s4promise3: { type: String },
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

index.defaultColumns = 'name, title, categories';
index.register();
