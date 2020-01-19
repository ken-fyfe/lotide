// compares the equivalance of two arrays
const eqArrays = function(array1, array2) {
  if ((Array.isArray(array1)) && (Array.isArray(array2))) {
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
  } else {
    return false;
  }
};

module.exports = eqArrays;