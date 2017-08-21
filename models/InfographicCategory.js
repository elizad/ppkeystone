var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * InfographicCategory Model
 */

var InfographicCategory = new keystone.List('InfographicCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
	name: { type: String },
	categorylongtitle: { type: String },
	description: { type: Types.Html, wysiwyg: true, height: 150 },

});

InfographicCategory.add({
	name: { type: String, required: true },
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

InfographicCategory.relationship({ ref: 'Infographic', path: 'infographics', refPath: 'categories' });

InfographicCategory.register();
