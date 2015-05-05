'use strict';

var fs = require('fs');
var shuffle = require('./transform');
var bitmap = require('./bitmap_object');

// Open file using fs and read it into a buffer(buff)
module.exports = fs.readFile('./img/bitmap1.bmp', function (err, buff) {
  if (err) throw err;
  // Convert buffer into a Javascript Object and log it 
  // into the console
  var buffObj = new bitmap.bitMapData(buff);
  // Create empty array to represent the color pallete
  var pallete = [];
  // Use a loop to extract the color pallete data into an 
  // array of arrays as such: [b, g, r, a]
  var readColorPallete = function (buff) {
    var counter = 0;
    // Between 54 - 182 bits in the pallete is where all 
    // the non black/white colors live
    for (var i = 54; i < 182; i+=4) {
      pallete[i] = [
      buff.readUInt8(i),
      buff.readUInt8(i+1),
      buff.readUInt8(i+2), 0];
      counter ++;
    }
  };
  // Now lets use the loop to read the color pallete and 
  // copy it into the pallete array 
  readColorPallete(buff);
  // Apply the transform on the pallete data
  shuffle.transform(pallete);
  // Turn the pallete array into a string  
  var transformedPallete = pallete.toString();
  // And write the data back into the buffer
  buff.write(transformedPallete, 54, 256);
  // Not write the new buffer data into a new .bmp file and 
  // if you look very very clode have a randomized .bmp file..
  fs.writeFile('./img/randomized.bmp', buff, function(err) {
    if (err) throw err;
  });
});

