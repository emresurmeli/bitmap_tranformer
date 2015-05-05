'use strict';

var Shuffle = exports = module.exports = {};

// Here we use a Fischer-Yates shuffle to "trasnform" the bmp file.. 
Shuffle.transform = function(array) {
  var m = array.length, t, i;

  while(m) {
    i = Math.ceil(Math.random() * m--);

	t = array[m];
	array[m] = array[i];
	array[i] = t;
  }
  return array;
}