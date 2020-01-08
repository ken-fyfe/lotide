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

// find the middle element of an array (or two if even length)
const middle = function(array) {
  let outputArray = [];
  const arrayLength = array.length;
  if (arrayLength > 2) {
    if (arrayLength % 2 === 0) {
      const middleIndex = arrayLength/2 - 1;
      outputArray.push(array[middleIndex], array[middleIndex + 1]);
    } else {
      const middleIndex = Math.floor(arrayLength/2);
      outputArray.push(array[middleIndex]);
    }
  }
  return outputArray;
};

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