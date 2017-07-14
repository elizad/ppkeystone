var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Homepage Model
 * =============
 */
var Homepage;
Homepage = new keystone.List('Homepage', {
	preview: {
		label: 'View Post',
		available: function () {
			return (this.state === 'published');
		},
		path: function () {
			return '/' + this.key
		},
	},
	map: {name: 'title'},
	autokey: {from: 'slug', path: 'title', unique: true},
});

Homepage.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	homeheadh1: { type: Types.Html, wysiwyg: true, height: 80 },
	homeheadtext: { type: Types.Html, wysiwyg: true, height: 80 },
	homeheadbutton: { type: Types.Html, wysiwyg: true, height: 20 },
	feature1: { type: Types.Html, wysiwyg: true, height: 20 },
	feature2: { type: Types.Html, wysiwyg: true, height: 20 },
	feature3: { type: Types.Html, wysiwyg: true, height: 20 },
	feature4: { type: Types.Html, wysiwyg: true, height: 20 },
	images: { type: Types.CloudinaryImages },

});

Homepage.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Homepage.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';

Homepage.register();

