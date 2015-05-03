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
	bitMap.imageSize = bitMapBuff.readUInt32LE(34);
	bitMap.colorPalate = bitMapBuff.readUInt32LE(54);
	bitMap.readColorPallete = (function () {
	  var counter = 0;
	  for (var i = 54; i < bitMap.startAddress; i+=4) {
	    pallete[counter] = {
	    b: bitMapBuff.readUInt8(i),
		g: bitMapBuff.readUInt8(i+1),
		r: bitMapBuff.readUInt8(i+2),
		a: 0
		}
		counter ++;
	   }
	})();
	bitMap.writeColorPallate = (function () {
		var counter = 0;
		for(var i = 54; i < bitMap.startAddress; i+=4) {
			pallete[counter] = [bitMapBuff.readUInt8(i).toString()];
			counter ++;
		}
	})();
	console.log(pallete.toString());
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
	console.log(bitMapBuff);
	console.log(bitMap);
	transform(pallete);
  	var randomPallete = pallete.toString();
    bitMapBuff.write(randomPallete, 54, 255);
    console.log(typeof(bitMapBuff));
  }
  fs.writeFile('./img/randomized.bmp', bitMapBuff, function(err) {
    if(err) {
  	  throw err;
    }
  });
});