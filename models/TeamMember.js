var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Team Member
 */
var TeamMember = new keystone.List('teamMember', {
	map: { name: 'title' },
	singular: 'TeamMember',
	plural: 'TeamMembers',
	autokey: { path: 'slug', from: 'title', unique: true },
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
});

TeamMember.add({
	// preview: {
	// 	preview: { type: Types.Preview }
	// },
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	createdAt: { type: Types.Date, default: Date.now },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	teamMemberImage: { type: Types.CloudinaryImage },
	fullname: { type: String },
	jobtitle: { type: String },
	description: { type: Types.Html, wysiwyg: true, height: 150 },
	qualification: { type: String },
	phone: { type: Types.Number },
	email: { type: String },
	categories: { type: Types.Relationship, ref: 'teamMemberCategory', many: true },
});

TeamMember.schema.methods.isPublished = function () {
	return this.state === 'published';
};

TeamMember.schema.pre('save', function (next) {
	if (this.isModified('state') && this.isPublished() && !this.publishedAt) {
		this.publishedAt = new Date();
	}
	next();
});

TeamMember.defaultColumns = 'title, state|20%, author|20%, publishedDate|20% , categories, jobtitle';

TeamMember.register();

