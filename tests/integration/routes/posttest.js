var keystone = require('keystone');
var chai = require('chai');
var dbURI = 'mongodb://localhost/profile-pension';
chai.should();
// CHANGE THIS AS NEEDED

describe('Posts', function () {

	beforeEach(function (done) {
		if (keystone.mongoose.connection.db) return done();
		console.log('Connecting to ' + dbURI);
		keystone.mongoose.connect(dbURI, done);
	});

	it('should be a connection to Mongo', function (done) {
		keystone.mongoose.connection.db.should.be.a('Object');
		done();
	});

	it('should be a Mongoose Model', function (done) {
		post = keystone.list('Post');
		// console.log(posts);
		post.should.be.a('Object');
		post.should.have.property('model').be.a('Function');
		post.should.have.property('schema').be.a('Object');

		done();
	});
});
