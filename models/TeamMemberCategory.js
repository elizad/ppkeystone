var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * team member categoory
 */

var TeamMemberCategory = new keystone.List('teamMemberCategory', {
	sortable: true,
	singular: 'TeamMemberCategory',
	plural: 'TeamMemberCategories',
	autokey: { from: 'slug', path: 'key', unique: true },
});

TeamMemberCategory.add({
	name: { type: String },
	categorytitle: { type: String },
	description: { type: Types.Markdown },
	video: { type: Types.Text },
	// slug: { type: String },
	isVisible: { type: Boolean },
});

TeamMemberCategory.defaultSort = 'name';

// TeamMemberCategory.relationship({ path: 'teamcategory', ref: 'TeamMember', refPath: 'category' });
// TeamMemberCategory.relationship({ ref: 'TeamMember', path: 'teammembercategories', refPath: 'teammembers' });
TeamMemberCategory.relationship({ ref: 'teamMember', refPath: 'categories' });

TeamMemberCategory.register();
