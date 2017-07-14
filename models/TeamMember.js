var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * TeamMember Model
 * ===========
 */

var TeamMember = new keystone.List('TeamMember', {
	track: true,
	sortable: true,
});

TeamMember.add({
	name: { type: String, required: true, initial: true },
	isLightningTalk: { type: Boolean },
	who: { type: Types.Relationship, ref: 'User', many: true, index: true },
	description: { type: Types.Html, wysiwyg: true },
	slides: { type: Types.Url },
	link: { type: Types.Url },
});


TeamMember.defaultColumns = 'name';
TeamMember.register();

