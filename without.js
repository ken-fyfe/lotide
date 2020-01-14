// remove unwanted items from array
const without = function(sourceArray, itemsToRemove) {
  for (let iRemove = 0; iRemove < itemsToRemove.length; iRemove++) {
    const index = sourceArray.indexOf(itemsToRemove[iRemove]);
    if (index > -1) {
      sourceArray.splice(index, 1);
    }
  }
  return sourceArray;
};

module.exports = without;

// // testing
// console.log(without([1, 2, 3], [1]));
// console.log(without([1, 2, 3, 4], [2, 3]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without([1, 2, 3, 4], [2, 3]), [1, 4]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);