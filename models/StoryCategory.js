var keystone = require('keystone');

/**
 * StoryCategory Model
 */

var StoryCategory = new keystone.List('StoryCategory', {
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

StoryCategory.add({
	name: { type: String, required: true },
});

StoryCategory.relationship({ ref: 'Story', path: 'Storys', refPath: 'categories' });

StoryCategory.register();
