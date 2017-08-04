var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * team member category
 */

var TeamMemberCategory = new keystone.List('teamMemberCategory', {
	sortable: true,
	singular: 'teammembercategory',
	plural: 'teammembercategories',
	autokey: { from: 'name', path: 'key', unique: true },
});

TeamMemberCategory.add({
	name: { type: String },
	// categories: { type: Types.Relationship, ref: 'teamMemberCategory', many: true },
	categorytitle: { type: String },
	description: { type: Types.Markdown },
	video: { type: Types.Text },
	// slug: { type: String },
	isVisible: { type: Boolean },
});

TeamMemberCategory.defaultSort = 'name';
TeamMemberCategory.relationship({ ref: 'teamMember', path: 'meet-the-team', refPath: 'categories' });

TeamMemberCategory.register();
