var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * StoryCategory Model
 */

var StoryCategory = new keystone.List('StoryCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

StoryCategory.add({
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

StoryCategory.relationship({ ref: 'Story', path: 'Storys', refPath: 'categories' });

StoryCategory.register();
