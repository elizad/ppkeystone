var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Infographic Model
 */

var Infographic = new keystone.List('Infographic', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Infographic.add({
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
	categories: { type: Types.Relationship, ref: 'InfographicCategory', many: true },
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

Infographic.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Infographic.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Infographic.register();

