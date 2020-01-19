// tail.js function

// strip the first value of an array (the head) and return the rest
const tail = function(array) {
  let returnArray = [];
  if (Array.isArray(array) && array.length === 0) {
    return [];
  } else if (array === undefined) {
    return undefined;
  } else {
    let test = array[0];
    if (test === undefined) {
      return undefined;
    } else {
      for (let i = 1; i < array.length; i++) {
        returnArray.push(array[i]);
      }
    }
  }
  console.log('inside tail.js: ', returnArray);
  return returnArray;
};

module.exports = tail;