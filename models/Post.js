var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 * preview - implemented with a second mongoose connection?
 */

var Post = new keystone.List('Post', {
	// preview: '/blog/post/:key',
	preview: function (callback) {
		this.populate('category', function (err) {
			if (err) return callback(err);
			if (this.category) return callback(null, '/blog/' + this.category.key + '/' + this.key);
			callback(null, '/blog/post/' + this.key);
		}.bind(this));
	},
	// preview: {
    //
	// },
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	meta: {
		title: { type: String },
		description: { type: String },
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
