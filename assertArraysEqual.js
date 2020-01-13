// compares the equivalance of two arrays

const eqArrays = require('./eqArrays');

// asserts the equality of two arrays
const assertArraysEqual = function(actual, expected) {
  let returnText;
  if (eqArrays(actual,expected)) {
    returnText = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnText = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(returnText);
};

module.exports = assertArraysEqual;