var keystone = require('keystone');
var Types = keystone.Field.Types;

var ContactCategory = new keystone.List('ContactCategory', {
	sortable: true,
	singular: 'contactcategory',
	plural: 'contactcategories',
	autokey: { from: 'name', path: 'key', unique: true },
});

ContactCategory.add({
	name: { type: String },
	categorylongtitle: { type: String },
	description: { type: Types.Html, wysiwyg: true, height: 150 },
	// slug: { type: String },
	isVisible: { type: Boolean },
});

ContactCategory.relationship({ ref: 'Contact', path: 'contact', refPath: 'categories' });

ContactCategory.register();
