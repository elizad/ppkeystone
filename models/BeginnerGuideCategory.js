var keystone = require('keystone');

/**
 * BeginnerGuideCategory Model
 */

var BeginnerGuideCategory = new keystone.List('BeginnerGuideCategory', {
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

BeginnerGuideCategory.add({
	name: { type: String, required: true },
});

BeginnerGuideCategory.relationship({ ref: 'BeginnerGuide', path: 'Beginnerguides', refPath: 'categories' });

BeginnerGuideCategory.register();
