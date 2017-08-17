var keystone = require('keystone');
var Types = keystone.Field.Types;


var Contact = new keystone.List('Contact', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Contact.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	map: { type: Types.Location, defaults: { country: 'United Kingdom' } },
	bussinesoffice: { type: String },
	bussinesname: { type: String },
	address1: { type: String },
	address2: { type: String },
	city: { type: String },
	postcode: { type: String },
	phone: { type: String },
	email: { type: String },
	metadata: {
		metatitle: { type: String },
		metadescription: { type: String },
		metakeywords: { type: String },
		metafbtitle: { type: String },
		metafbdescription: { type: String },
		metafbimageurl: { type: String },
		metatwittertitle: { type: String },
		metatwittercard: { type: String },
		metatwitterdescription: { type: String },
		metatwitterimageurl: { type: String },
	},
	categories: { type: Types.Relationship, ref: 'ContactCategory', many: true },
});

Contact.defaultColumns = 'name, title, bussinesname';
Contact.register();
