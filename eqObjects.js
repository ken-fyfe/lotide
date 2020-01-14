// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    const needToMatch = Object.keys(object1).length;
    let matchcount = 0;
    for (let objectKey1 in object1) {
      for (let objectKey2 in object2) {
        console.log('objectKey1 :', objectKey1);
        console.log('object1 :', object1);
        console.log('objectKey2 :', objectKey2);
        console.log('object2 :', object2);
        if (Array.isArray(object1[objectKey1]) && Array.isArray(object2[objectKey2])) {
          if (eqArrays(object1[objectKey1]), object2[objectKey2]) {
            matchcount += 1;
          }
        } else {
          if (object1[objectKey1] === object2[objectKey2]) {
            matchcount += 1;
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

module.exports = eqObjects;

// test function

// // primatives as value
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// // // arrays as value
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);