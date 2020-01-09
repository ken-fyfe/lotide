const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

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

// implementing our own map function

const map = function(array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}

const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const words2 = ["1234", "3456", "234", "999", "tom"];
const results2 = map(words2, word => word[0]);
assertArraysEqual(results2, [ '1', '3', '2', '9', 't' ]);