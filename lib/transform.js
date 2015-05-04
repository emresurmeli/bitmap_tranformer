'use strict';

// Here we use a Fischer-Yates shuffle to "trasnform" the bmp file.. 
var transform = function (array) {
  var m = array.length, t, i;

  while(m) {
    i = Math.floor(Math.random() * m--);

	t = array[m];
	array[m] = array[i];
	array[i] = t;
  }
  return array;
}

module.export = transform;