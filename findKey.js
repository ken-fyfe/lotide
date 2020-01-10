const assertEqual = function(actual, expected) {
  let returnText;
  if (actual === expected) {
    returnText = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnText = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(returnText);
};

// copy values from array until a condition is met
const findKey = function(array, callback) {
  // console.log('array :', array);
  // console.log('callback :', callback);
  for (let item in array) {
    // console.log(item);
    const foundMatch = callback(array[item]);
    if (foundMatch) {
      // console.log(item);
      return item;
    }
  }
}

// testing
let testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
assertEqual(findKey(testObject, x => x.stars === 2), "noma");
assertEqual(findKey(testObject, x => x.stars === 1), "Blue Hill");
assertEqual(findKey(testObject, x => x.stars === 3), "Akaleri");