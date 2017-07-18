var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * TeamMember Model
 * ===========
 */

var MeetTheTeamMember = new keystone.List('MeetTheTeamMember', {
	track: true,
	sortable: true,
});

MeetTheTeamMember.add({
	name: { type: String, required: true, initial: true },
	isLightningTalk: { type: Boolean },
	who: { type: Types.Relationship, ref: 'User', many: true, index: true },
	description: { type: Types.Html, wysiwyg: true },
	slides: { type: Types.Url },
	link: { type: Types.Url },
});

MeetTheTeamMember.defaultColumns = 'name';
MeetTheTeamMember.register();

