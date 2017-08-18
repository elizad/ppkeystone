var keystone = require('keystone');

/**
 * VideoCategory Model
 */

var VideoCategory = new keystone.List('VideoCategory', {
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

VideoCategory.add({
	name: { type: String, required: true },
});

VideoCategory.relationship({ ref: 'Video', path: 'Videos', refPath: 'categories' });

VideoCategory.register();
