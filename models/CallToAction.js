var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Call to action
 * ===========
 */

var CallToAction = new keystone.List('CallToAction', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

CallToAction.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, height: 250 },
	button: { type: String },
	buttonlink: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
});

CallToAction.defaultColumns = 'title, content';
CallToAction.register();
