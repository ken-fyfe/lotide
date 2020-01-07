// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let returnText;
  if (actual === expected) {
    returnText = '✅ ' + 'Assertion Passed: ' + actual + ' === ' + expected;
  } else {
    returnText = '🛑 ' + 'Assertion Failed: ' + actual + ' !== ' + expected;
  }
  console.log(returnText);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);