var sorting = require('../../client/sorting');
var chai = require('chai');
// var should = chai.should;
var expect = chai.expect;


describe('sorting is working', function () {
	it('should sort the array by lower value', function (done) {
		var arr = [3, 6, 5, 4, 2];
		var sort = sorting(arr);
		// sort.should.equal([2, 3, 4, 5, 6 ]);
		expect(sort).to.deep.equal([2, 3, 4, 5, 6]);

		done();
	});

});
