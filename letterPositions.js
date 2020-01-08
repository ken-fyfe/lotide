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

// function to return an object with the location numbers of letter in a string
const letterPositions = function(sentence) {
  const results = {};
  let position = -1;
  for (const letter of sentence) {  // loop thru all letters in the input string
    position += 1;
    if (letter !== ' ') {  // don't count spaces
      if (letter in results) {
        results[letter].push(position);
      } else {
        results[letter] = [position];
      }
    }
  }
  return results;
};

// test the function
console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello"),{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] })
assertArraysEqual(letterPositions("lighthouse in the house"), { l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ] });