var keystone = require('keystone');
var chai = require('chai');
var dbURI = 'mongodb://localhost/profile-pension';
chai.should();

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
		post.should.be.a('Object');
		post.should.have.property('model').be.a('Function');
		post.should.have.property('schema').be.a('Object');
		done();
	});
	it('Page should be a Mongoose Model', function (done) {
		page = keystone.list('Page');
		page.should.be.a('Object');
		page.should.have.property('model').be.a('Function');
		page.should.have.property('schema').be.a('Object');
		done();
	});
	it(' Pension should be a Mongoose Model', function (done) {
		pension = keystone.list('Pension');
		// console.log(pension);
		pension.should.be.a('Object');
		pension.should.have.property('model').be.a('Function');
		pension.should.have.property('schema').be.a('Object');
		done();
	});
	it(' TeamMemberCategories should be a Mongoose Model', function (done) {
		teamMemberCategory = keystone.list('teamMemberCategory');
		teamMemberCategory.should.be.a('Object');
		teamMemberCategory.should.have.property('model').be.a('Function');
		teamMemberCategory.should.have.property('schema').be.a('Object');
		done();
	});
	it(' TeamMember should be a Mongoose Model', function (done) {
		teamMember = keystone.list('teamMember');
		console.log(teamMember);
		teamMember.should.be.a('Object');
		teamMember.should.have.property('model').be.a('Function');
		teamMember.should.have.property('schema').be.a('Object');
		done();
	});
});
