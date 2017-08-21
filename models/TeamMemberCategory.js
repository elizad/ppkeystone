var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Team member category
 */

var TeamMemberCategory = new keystone.List('teamMemberCategory', {
	sortable: true,
	singular: 'teammembercategory',
	plural: 'teammembercategories',
	autokey: { from: 'name', path: 'key', unique: true },
});

TeamMemberCategory.add({
	name: { type: String },
	categorytitle: { type: String },
	description: { type: Types.Html, wysiwyg: true, height: 150 },
	video: { type: Types.Text },
	// slug: { type: String },
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

TeamMemberCategory.defaultSort = 'name';
TeamMemberCategory.relationship({ ref: 'teamMember', path: 'meet-the-team', refPath: 'categories' });

TeamMemberCategory.register();
