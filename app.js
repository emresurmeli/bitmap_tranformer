'use strict';

var fs = require('fs');

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
	bitMap.colorPlanes = bitMapBuff.readUInt16LE(26);
	bitMap.colorDepth =  bitMapBuff.readUInt16LE(28);
	bitMap.imageSize = bitMapBuff.readUInt32LE(34);
	bitMap.resH = bitMapBuff.readUInt32LE(38);
	bitMap.resV = bitMapBuff.readUInt32LE(42);
	bitMap.colorNum = bitMapBuff.readUInt32LE(46);
	bitMap.colorImpt = bitMapBuff.readUInt32LE(50);
	bitMap.colorPalate = bitMapBuff.readUInt32LE(54);
	bitMap.readColorPalate = (function () {
	  var counter = 0;
	  for (var i = 54; i < bitMap.startAddress ; i+=4) {
	    pallete[counter] = {
	    b: bitMapBuff.readUInt8(i),
		g: bitMapBuff.readUInt8(i+1),
		r: bitMapBuff.readUInt8(i+2),
		a: 0
		}
		counter ++;
	   }
	})();
	var transform = function (array) {
	  // Here we use a Fischer-Yates shuffle to "trasnform" the bmp file.. 
	  var m = array.length, t, i;

	  while(m) {
	    i = Math.floor(Math.random() * m--);

	    t = array[m];
	    array[m] = array[i];
	    array[i] = t;
	  }
	  return array;
	}
	console.log(bitMap);
	transform(pallete);
	pallete.write(255, 54, 256);
	console.log(pallete);
  }
  fs.writeFile('./img/randomized.bmp', bitMapBuff, function(err) {
    if(err) {
  	  throw err;
    }
  });
});