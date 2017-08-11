var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Pension Page Model
 * ===========
 */

var Pension = new keystone.List('Pension', {
	track: true,
	sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Pension.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	longtitle: { type: String },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: String, max: { chars: 50, mode: 'crop' } },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'PensionCategory', many: true },
});

Pension.defaultColumns = 'name ';
Pension.register();
