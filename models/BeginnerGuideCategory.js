var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * BeginnerGuideCategory Model
 */

var BeginnerGuideCategory = new keystone.List('BeginnerGuideCategory', {
	autokey: { from: 'name', path: 'key', unique: true },

});

BeginnerGuideCategory.add({
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

BeginnerGuideCategory.relationship({ ref: 'BeginnerGuide', path: 'Beginnerguides', refPath: 'categories' });

BeginnerGuideCategory.register();
