// compares the equivalance of two arrays
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

// flattens an array built of single elements and other arrays into a single array
const flatten = function(inputArray) {
  let returnArray = [];
  inputArray.forEach(element => {
    if (Array.isArray(element)) {  // an array element
      element.forEach(arrayElement => {
        returnArray.push(arrayElement);
      });
    } else {  // single value only
      returnArray.push(element);
    }
  });
  return returnArray;
};

// testing
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([['a', 'b', 'c'], 2, [3, 4], 5, ['six']]), ['a', 'b', 'c', 2, 3, 4, 5, 'six']);