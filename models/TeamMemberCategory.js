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
	title: { type: Types.Text, initial: true },
	description: { type: Types.Markdown, initial: true },
	video: { type: Types.Text, initial: true },
	slug: { type: Types.Text, initial: true },
	isVisible: { type: Boolean, initial: true, index: true },
});

TeamMemberCategory.relationship({ path: 'teamcategory', ref: 'TeamMember', refPath: 'category' });

TeamMemberCategory.register();
