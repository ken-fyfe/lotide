const assertEqual = function(actual, expected) {
  let returnText;
  if (actual === expected) {
    returnText = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    returnText = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(returnText);
};

const findKeyByValue = function(object, value) {
  let returnValue = undefined;
  for (key in object) {
    if (object[key] === value) {
      returnValue = key;
    }
  }
  return returnValue;
};

// testing
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bikeBrands = {
  fast: "Cervelo",
  cheap: "CCM",
  middle: "Trek"
}

const Trek = "TREK"
assertEqual(findKeyByValue(bikeBrands, "Trek"), "middle");
assertEqual(findKeyByValue(bikeBrands, Trek), undefined);