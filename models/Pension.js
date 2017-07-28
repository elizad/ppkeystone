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
	description: { type: Types.Html, wysiwyg: true },
	slides: { type: Types.Url },
	link: { type: Types.Url },
});


Pension.defaultColumns = 'name ';
Pension.register();
