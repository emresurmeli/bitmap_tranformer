'use strict';

var shuffle = require('../lib/transform');
var expect = require('chai').expect;

describe('transform', function() {
	it('will return a randomized array', function () {
		var array = [1, 2, 3];
		expect(shuffle.transform(array)).to.eql(array);
	});
});