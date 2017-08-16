var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	longtitle: { type: String },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: String },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
	meta: {
		title: { type: String },
		description: { type: Types.Html, wysiwyg: false, height: 100 },
		image: {
			filename: { type: Types.CloudinaryImage },
		},
	},
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.schema.virtual('fullPostUrl').get(function () {
	return keystone.get('baseUrl') + 'content-hub/post/' + this.slug;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
