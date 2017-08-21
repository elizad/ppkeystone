var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * pension Calculator page
 * ===========
 */

var pensionCalculator = new keystone.List('PensionCalculator', {
	track: true,
	sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

pensionCalculator.add({
	title: { type: String, required: true },
	longtitle: { type: String },
	breadcrumbstitle: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	pensionCalculatorTitle: { type: String },
	pensionCalculatorContent: { type: Types.Html, wysiwyg: true, height: 250 },
	pensionCalculatorButton: { type: String },
	pensionCalculatorButtonUrl: { type: String },
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

pensionCalculator.defaultColumns = 'name, title';
pensionCalculator.register();
