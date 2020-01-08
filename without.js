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

// remove unwanted items from array
const without = function(sourceArray, itemsToRemove) {
  let positionArray = [];
  for (let iRemove = 0; iRemove < itemsToRemove.length; iRemove++) {
    const index = sourceArray.indexOf(itemsToRemove[iRemove]);
    if (index > -1) {
      sourceArray.splice(index, 1);
    }
  }
  return sourceArray;
};

// testing
console.log(without([1, 2, 3], [1]));
console.log(without([1, 2, 3, 4], [2, 3]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3, 4], [2, 3]), [1, 4]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);