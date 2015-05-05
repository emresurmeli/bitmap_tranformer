'use strict';

var fs = require('fs');
var app = require('../lib/app');
var bitmap = require('../lib/bitmap_object');
var shuffle = require('../lib/transform');
var expect = require('chai').expect;
var buffObj;
var pallete;
var transformedPallete;

describe('the application', function() {
	before(function (done) {
		fs.readFile('./img/bitmap1.bmp', function (err, buff) {
			if(err) throw err;
			var buffObj = new bitmap.bitMapData(buff);
			var pallete = [];
			done();
		});
	});

	it('should turn the buffer into a Object', function() {
		expect(buffObj).to.be.a(Object);
	});

	it('should run a transform on the Object', function() {
		expect(shuffle.transform(pallete).to.not.equal(pallete));
	});

	it('should turn the transformed object into a buffer', function() {
		expect(transformedPallete).to.eql(pallete.toString());
	});

	after(function (done) {
		fs.writeFile('./img/randomized.bmp', function(err) {
		if(err) throw err;
		done();
		});
	});

	it('should write that buffer into a new file', function() {
		expect(transformedPallete).to.not.eql(buffObj);
	});
});