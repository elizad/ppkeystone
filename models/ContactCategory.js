var keystone = require('keystone');
var Types = keystone.Field.Types;

var ContactCategory = new keystone.List('ContactCategory', {
	sortable: true,
	singular: 'contactcategory',
	plural: 'contactcategories',
	autokey: { from: 'name', path: 'key', unique: true },
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

ContactCategory.add({
	name: { type: String },
	categorylongtitle: { type: String },
	description: { type: Types.Html, wysiwyg: true, height: 150 },
	isVisible: { type: Boolean },
});

ContactCategory.relationship({ ref: 'Contact', path: 'contact', refPath: 'categories' });

ContactCategory.register();
