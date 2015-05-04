'use strict';

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
console.log(bitMap);

module.export = bitMap;