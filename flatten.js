// flattens an array built of single elements and other arrays into a single array
const flatten = function(inputArray) {
  let returnArray = [];
  inputArray.forEach(element => {
    if (Array.isArray(element)) {  // an array element
      element.forEach(arrayElement => {
        returnArray.push(arrayElement);
      });
    } else {  // single value only
      returnArray.push(element);
    }
  });
  return returnArray;
};

module.exports = flatten;

// testing
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([['a', 'b', 'c'], 2, [3, 4], 5, ['six']]), ['a', 'b', 'c', 2, 3, 4, 5, 'six']);