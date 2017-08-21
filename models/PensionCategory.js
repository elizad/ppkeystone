var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Pension types category
 */

var PensionCategory = new keystone.List('PensionCategory', {
	sortable: true,
	singular: 'pensioncategory',
	plural: 'pensioncategories',
	autokey: { from: 'name', path: 'key', unique: true },
});

PensionCategory.add({
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

PensionCategory.defaultSort = 'name';
PensionCategory.relationship({ ref: 'Pension', path: 'pension-types', refPath: 'categories' });

PensionCategory.register();
