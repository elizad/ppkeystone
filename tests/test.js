var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


describe('Blobs', function () {

	it('should list', function (done) {
		chai.request()
			.get('/...')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('should list');
	it('should add ');
	it('should update ');
	it('should delete ');
});
