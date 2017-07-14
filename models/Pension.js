var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Pension Page Model
 * ===========
 */

var Pension = new keystone.List('Pension', {
	track: true,
	sortable: true,
});

Pension.add({
	name: { type: String, required: true, initial: true },
	isLightningTalk: { type: Boolean },
	who: { type: Types.Relationship, ref: 'User', many: true, index: true },
	description: { type: Types.Html, wysiwyg: true },
	slides: { type: Types.Url },
	link: { type: Types.Url }
});


Pension.defaultColumns = 'name, meetup|20%, who|20%';
Pension.register();
