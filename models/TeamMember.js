var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Pension Switch as homepage template
 */
var TeamMember = new keystone.List('teamMember', {
	map: { name: 'title' },
	autokey: { from: 'slug', path: 'title', unique: true },
});

TeamMember.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	createdAt: { type: Types.Date, default: Date.now },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	teamMemberImage: { type: Types.CloudinaryImage, publicID: 'slug' },
	fullname: { type: String },
	jobtitle: { type: String },
	description: { type: Types.Html, wysiwyg: false, height: 150 },
	qualification: { type: Types.Html, wysiwyg: true, height: 50 },
	phone: { type: Types.Number },
	email: { type: String },
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

//  TeamMember.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';

TeamMember.register();

