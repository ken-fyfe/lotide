// assert equal compares two quantities and returns true if exactly equal
const assertEqual = function(actual, expected) {
  let returnText;
  if (actual === expected) {
    returnText = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnText = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(returnText);
};

// count number of each type of letter in a string; return in an object
const countLetters = function(inputString) {
  countedLetters = {};
  for (const letter of inputString) {  // loop thru all letters in string
    if (letter !== ' ') {  // don't count spaces
      if (letter in countedLetters) { // add to count
        countedLetters[letter] += 1;
      } else {  // initialize count
        countedLetters[letter] = 1;
      }
    }
  }
  return countedLetters;
};

// test string
console.log(countLetters("lighthouse in the house"));
// will output
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }