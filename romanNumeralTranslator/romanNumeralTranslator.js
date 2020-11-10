var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var translateRomanNumeral = function (romanNumeral) {
  // return null if not a string
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    let current = DIGIT_VALUES[romanNumeral[i]];
    let next = DIGIT_VALUES[romanNumeral[i + 1]];

    if (current < next && i !== romanNumeral.length - 1) {
      result -= current
    } else {
      result += current
    }
  }
  return result;
  // loop  through each digit,
  // look at the prev.
  //  If it is smaller than the current, subrtact prev from current
  //  If it is larger than the current, add the two togther
};