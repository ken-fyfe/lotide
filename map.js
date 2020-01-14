// implementing our own map function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words1 = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words1, word => word[0]);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

// const words2 = ["1234", "3456", "234", "999", "tom"];
// const results2 = map(words2, word => word[0]);
// assertArraysEqual(results2, [ '1', '3', '2', '9', 't' ]);