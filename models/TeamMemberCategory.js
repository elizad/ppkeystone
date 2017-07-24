var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * team member categoory
 */

var TeamMemberCategory = new keystone.List('TeamMemberCategory', {
	sortable: true,
	autokey: { path: 'slug', from: 'name', unique: true },
});

TeamMemberCategory.add({
	name: { type: Types.Text, required: true, index: true, initial: true },
	title: { type: Types.Text },
	description: { type: Types.Markdown, initial: true },
	video: { type: Types.Text },
	slug: { type: Types.Text },
	isVisible: { type: Boolean, initial: true, index: true },
});

TeamMemberCategory.relationship({ path: 'teamcategory', ref: 'TeamMember', refPath: 'category' });

TeamMemberCategory.register();
