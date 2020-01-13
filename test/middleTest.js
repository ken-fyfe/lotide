const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log('one element: ', middle([1]));
console.log('two elements: ', middle([1, 2]));
console.log('three elements: ', middle([1, 2, 3]));
console.log('four elements: ', middle([1, 2, 3, 4]));
console.log('seven elements: ', middle([1, 2, 3, 4, 5, 6, 7]));
console.log('ten elements: ', middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);