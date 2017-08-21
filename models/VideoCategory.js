var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * VideoCategory Model
 */

var VideoCategory = new keystone.List('VideoCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

VideoCategory.add({
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

VideoCategory.relationship({ ref: 'Video', path: 'Videos', refPath: 'categories' });

VideoCategory.register();
