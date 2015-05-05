'use strict';

module.exports = exports = Buffer;
  
Buffer.bitMapData = function(data) {
	this.headerSize = data.readUInt32LE(2);
	this.startAddress = data.readUInt32LE(10);
	this.width = data.readUInt32LE(18);
	this.height = data.readUInt32LE(22);
	this.imageSize = data.readUInt32LE(34);
	this.colorPalate = data.readUInt32LE(54);
};