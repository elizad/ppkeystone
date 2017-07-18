var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * TeamMember Model
 * ===========
 */

var MeetTheTeam = new keystone.List('MeetTheTeam', {
	track: true,
	sortable: true,
});

MeetTheTeam.add({
	name: { type: String, required: true, initial: true },
	isLightningTalk: { type: Boolean },
	who: { type: Types.Relationship, ref: 'User', many: true, index: true },
	description: { type: Types.Html, wysiwyg: true },
	slides: { type: Types.Url },
	link: { type: Types.Url },
});


MeetTheTeam.defaultColumns = 'name';
MeetTheTeam.register();

