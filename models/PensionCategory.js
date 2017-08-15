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
	// slug: { type: String },
	isVisible: { type: Boolean },
});

PensionCategory.defaultSort = 'name';
PensionCategory.relationship({ ref: 'Pension', path: 'pension-types', refPath: 'categories' });

PensionCategory.register();
