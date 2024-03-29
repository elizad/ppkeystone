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
	isVisible: { type: Boolean },
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

ContactCategory.relationship({ ref: 'Contact', path: 'contact', refPath: 'categories' });

ContactCategory.register();
