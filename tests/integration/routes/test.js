var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('express');
var should = chai.should();


chai.use(chaiHttp);

describe('', function () {
	it('Make sure if page exist', function (done) {
		chai.request('http://localhost:3000')
			.get('/')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('Make sure if contact page exist', function (done) {
		chai.request('http://localhost:3000')
			.get('/contactd')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('Make sure if  TP SCORE API  exists', function (done) {
		chai.request('https://api.trustpilot.com')
			.get('/v1/business-units/57ff44480000ff000595f84b/?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('Make sure if meet the team  exists', function (done) {
		chai.request('http://localhost:3000')
			.get('/meet-the-team')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('Make sure if team members exists', function (done) {
		chai.request('http://localhost:3000')
			.get('/meet-the-team/simon-vella')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('Make sure if pension types  exists', function (done) {
		chai.request('http://localhost:3000')
			.get('/pension-types')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
	it('Make sure if pension page exists', function (done) {
		chai.request('http://localhost:3000')
			.get('/pension-types/defined-contribution-pension/')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});

});
