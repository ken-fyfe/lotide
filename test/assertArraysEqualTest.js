const assertArraysEqual = require('../assertArraysEqual');

// test the functions!

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3, 1], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => false