var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * BeginnerGuide Model
 */

var BeginnerGuide = new keystone.List('BeginnerGuide', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

BeginnerGuide.add({
	title: { type: String, required: true },
	displayBlogTitle: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	longtitle: { type: String },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: String },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'BeginnerGuideCategory', many: true },
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

BeginnerGuide.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

BeginnerGuide.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
BeginnerGuide.register();
