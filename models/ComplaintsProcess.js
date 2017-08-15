var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Pension review page
 * ===========
 */

var ComplaintsProcess = new keystone.List('ComplaintsProcess', {
	track: true,
	sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

ComplaintsProcess.add({
	title: { type: String, required: true },
	longtitle: { type: String },
	breadcrumbstitle: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: { type: Types.Html, wysiwyg: true, height: 250 },
});

ComplaintsProcess.defaultColumns = 'name, title, categories';
ComplaintsProcess.register();
