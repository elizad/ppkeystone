var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Steps page
 * ===========
 */

var Steps = new keystone.List('Steps', {
	track: true,
	sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Steps.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', Steps: true },
	author: { type: Types.Relationship, ref: 'User', Steps: true },
	publishedDate: { type: Types.Date, Steps: true, dependsOn: { state: 'published' } },
	longtitle: { type: String },
	breadcrumbstitle: { type: String },
	steptitle: { type: String },
	step1: { type: String },
	step2: { type: String },
	step3: { type: String },
	buttontext: { type: String },
	buttonlink: { type: String },
	modaltext: { type: String },
	modaltitle: { type: String },
	modalsubtitle: { type: String },
	modalcontent: { type: Types.Html, wysiwyg: true, height: 150 },
	metadata: {
		metatitle: { type: String },
		metadescription: { type: String },
		metakeywords: { type: String },
		metafbtitle: { type: String },
		metafbdescription: { type: String },
		metafbimageurl: { type: Types.CloudinaryImage },
		metatwittertitle: { type: String },
		metatwittercard: { type: String },
		metatwitterdescription: { type: String },
		metatwitterimageurl: { type: Types.CloudinaryImage },
	},
});

Steps.defaultColumns = 'title, promise1, promise2, s4promise3, s4promise4 ';
Steps.register();
