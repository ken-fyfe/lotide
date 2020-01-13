// head.js function

const assertEqual = require('./assertEqual');

// returns the first value or head of an array
const head = function(array) {
  let test = array[0];
  if (test === undefined) {
    return undefined;
  } else {
    return array[0];
  }
};

module.exports = head;