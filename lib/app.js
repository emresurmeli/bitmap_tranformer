'use strict';

var fs = require('fs');
var transform = require('./transform.js');

fs.readFile('./img/bitmap1.bmp', function (err, data) {
  
  if(err) {
    throw error
  } else {
    var bitMapBuff;
	var pallete = [];
	bitMapBuff = data;
		
	var bitMap = {};
	bitMap.headerSize = bitMapBuff.readUInt32LE(2);
	bitMap.startAddress = bitMapBuff.readUInt32LE(10);
	bitMap.width = bitMapBuff.readUInt32LE(18);
	bitMap.height = bitMapBuff.readUInt32LE(22);
	bitMap.imageSize = bitMapBuff.readUInt32LE(34);
	bitMap.colorPalate = bitMapBuff.readUInt32LE(54);
	bitMap.readColorPallete = (function () {
	  var counter = 0;
	  for (var i = 54; i < bitMap.startAddress; i+=4) {
	    pallete[counter] = [
	    bitMapBuff.readUInt8(i),
		bitMapBuff.readUInt8(i+1),
		bitMapBuff.readUInt8(i+2),
		0];
		counter ++;
	   }
	})();
    transform(pallete);
    console.log(pallete);
  	var transformedPallete = pallete.toString();
    bitMapBuff.write(transformedPallete, 54, 255);
    console.log(typeof(bitMapBuff));
  }
  fs.writeFile('./img/randomized.bmp', bitMapBuff, function(err) {
    if(err) {
  	  throw err;
    }
  });
});