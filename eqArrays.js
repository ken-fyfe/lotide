const assertEqual = function(actual, expected) {
  let returnText;
  if (actual === expected) {
    returnText = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnText = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(returnText);
};

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

// test the functions!

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
assertEqual(eqArrays([1, 2, 3, 1], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false