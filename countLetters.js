// count number of each type of letter in a string; return in an object
const countLetters = function(inputString) {
  let countedLetters = {};
  for (const letter of inputString) {  // loop thru all letters in string
    if (letter !== ' ') {  // don't count spaces
      if (letter in countedLetters) { // add to count
        countedLetters[letter] += 1;
      } else {  // initialize count
        countedLetters[letter] = 1;
      }
    }
  }
  return countedLetters;
};

module.exports = countLetters;