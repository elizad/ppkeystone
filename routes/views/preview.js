var keystone = require('keystone');
const target = 'input.EditForm__key-or-id__input';
/*
    Custom FieldType Constructor
    @extends Field
*/

exports = module.exports = function (req, res) {
	function addLink () {
		// var slug = document.getElementsByClassName(target).value;
		// if (!slug) return setTimeout(addLink, 1000);
		// document.getElementsByClassName(target).after('<a title="Preview" href="/blog/post/' + slug + '" target="_blank">' + slug + ' (preview)</a>');
		// document.getElementsByClassName(target).remove();
	}

	addLink();
};
