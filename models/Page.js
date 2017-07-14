var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Page Model
 * =============
 */

var Page = new keystone.List('Page', {
	map: { name: 'title' },
	autokey: { from: 'slug', path: 'title', unique: true },
});

Page.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	heroImage: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	content2: { type: Types.Html, wysiwyg: true, height: 250 },
	content3: { type: Types.Html, wysiwyg: false, height: 150 },
	images: { type: Types.CloudinaryImages },
	// String	Text
	// Number	Number
	// Date	DateTime
	// Boolean	Boolean
});

Page.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Page.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';

Page.register();

var ChildPage = new keystone.List('ChildPage', { inherits: Page });
ChildPage.add({ child_content: { type: String, readonly: true } });
ChildPage.register();
