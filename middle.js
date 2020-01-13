// find the middle element of an array (or two if even length)
const middle = function(array) {
  let outputArray = [];
  const arrayLength = array.length;
  if (arrayLength > 2) {
    if (arrayLength % 2 === 0) {
      const middleIndex = arrayLength / 2 - 1;
      outputArray.push(array[middleIndex], array[middleIndex + 1]);
    } else {
      const middleIndex = Math.floor(arrayLength / 2);
      outputArray.push(array[middleIndex]);
    }
  }
  return outputArray;
};

module.exports = middle;