var keystone = require('keystone');
var Types = keystone.Field.Types;

var Carousel = new keystone.List('Carousel', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Carousel.add({
	title: { type: String, required: true },
	description: { type: Types.Html },
	image: { type: Types.CloudinaryImage },
	city: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
});

Carousel.defaultColumns = 'title, city, description, image ';
Carousel.register();
