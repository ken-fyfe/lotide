// tail.js function

// compares two values
const assertEqual = function(actual, expected) {
  let returnText;
  if (actual === expected) {
    returnText = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnText = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(returnText);
};

// strip the first value of an array (the head) and return the rest
const tail = function(array) {
  let returnArray = [];
  if (array === []) {
    let test = array[0];
    if (test === undefined) {
      return undefined;
    } else {
      for (let i = 1; i < array.length; i++) {
        returnArray.push(array[i]);
      }
    }
  }
  return returnArray;
};

console.log(tail([2,3,4]));
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
let x = [1];
console.log(x, tail(x));
let y = [];
console.log(y, tail(y));