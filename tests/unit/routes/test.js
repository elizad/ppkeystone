var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('express');
var should = chai.should();


chai.use(chaiHttp);

decribe('', function () {
	it('Make sure if page exist', function (done) {
		chai.request('locahost:3000')
			.get()
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('Make sure if  TP SCORE API  exists', function (done) {
		chai.request('https://api.trustpilot.com/v1/business-units/57ff44480000ff000595f84b/?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG')
			.get('/')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('Verify we get Json Data from URL', function (done) {
		chai.request('https://api.trustpilot.com/v1/business-units/57ff44480000ff000595f84b/?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG')
			.get('')
			.end(function (err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				done();
			});
	});
	it('Make sure if  TP  REVIEW API  exists', function (done) {
		chai.request('https://api.trustpilot.com/v1/business-units/57ff44480000ff000595f84b/reviews?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG')
			.get('/')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('Verify we get Json Data from URL', function (done) {
		chai.request('https://api.trustpilot.com/v1/business-units/57ff44480000ff000595f84b/reviews?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG')
			.get('')
			.end(function (err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				done();
			});
	});

});
