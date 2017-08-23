var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 */
var User = new keystone.List('User');

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


User.schema.methods.resetPassword = function (callback) {
	var user = this;
	user.resetPasswordKey = keystone.utils.randomString([16, 24]);
	user.save(function(err) {
		if (err) return callback(err);
		new keystone.Email('forgotten-password').send({
			user: user,
			link: '/reset-password/' + user.resetPasswordKey,
			subject: 'Reset your Profile Pension Password',
			to: user.email,
			from: {
				name: 'Proofile Pension',
				email: 'contact@profilepension.co.uk',
			}
		}, callback);
	});
}

/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
