var keystone = require('keystone');
var Types = keystone.Field.Types;

/* portfolio Page*/

var Portfolio = new keystone.List('Portfolio', {
	autokey: { path: 'slug', from: 'title', unique: true },
	map: { name: 'title' },
	defaultSort: '-createdAt',
});

Portfolio.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
	author: { type: Types.Relationship, ref: 'User', index: true },
	createdAt: { type: Date, default: Date.now },
	publishedAt: Date,
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Portfolio.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Portfolio.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Portfolio.register();
