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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  countedOutput = {};
  // console.log('itemsToCount :', itemsToCount['Fang']);
  for (const itemToCount in itemsToCount) {
    if (itemsToCount[itemToCount]) {  // if that key has been flagged as true
      countedOutput[itemToCount] = undefined;
    };
  }
  for (const value of allItems) {
    for (const itemToCount in itemsToCount) {
      if (itemsToCount[itemToCount] && value === itemToCount) {
        if (countedOutput[itemToCount] === undefined) {
          countedOutput[itemToCount] = 0;
        }
        countedOutput[itemToCount] += 1;
      }
    }
  }
  return countedOutput;
};


// test things out
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log('result1 :', result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);