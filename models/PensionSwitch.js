var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Pension Switch page
 * ===========
 */

var PensionSwitch = new keystone.List('PensionSwitch', {
	track: true,
	sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

PensionSwitch.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	s1title: { type: String },
	s1content: { type: Types.Html, wysiwyg: true, height: 250 },
	s1button: { type: String },
	s1buttonlink: { type: String },
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

PensionSwitch.defaultColumns = 'name, title, categories';
PensionSwitch.register();
