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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    const needToMatch = Object.keys(object1).length;
    let matchcount = 0;
    for (let objectKey1 in object1) {
      for (let objectKey2 in object2) {
        if (objectKey1 === objectKey2) {
          if (Array.isArray(object1[objectKey1]) && Array.isArray(object2[objectKey2])) {
            if (eqArrays(object1[objectKey1]), object2[objectKey2]) {
              matchcount += 1;
              console.log('matchcount (if arrays):', matchcount);
            }
          } else {
            if (object1[objectKey1] === object2[objectKey2]) {
              matchcount += 1;
              console.log('matchcount (if values) :', matchcount);
            }
          }
        }
      }
    }
    if (matchcount === needToMatch) {
      return true;
    } else {
      return false;
    }
  } else {  // number of object keys is not the same
    return false;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let returnText = '';
  if (eqObjects(actual, expected)) {
    returnText = `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    returnText = `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(returnText);
};

// testing!

const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
assertObjectsEqual(obj1, obj2);

const obj3 = { b: 2, a: '1' };
const obj4 = { c: 2, a: '1' };
assertObjectsEqual(obj3, obj4);

const ab = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);