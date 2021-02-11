// Given two binary strings a and b, return their sum as a binary string.

/*
 * @param {string} a
 * @param {string} b
 * @return {string}
 */


var addBinary = function (a, b) {
  // 0b: binary
  let ai = BigInt('0b' + a);
  let bi = BigInt('0b' + b);

  ai += bi;

  // to binary string
  return ai.toString(2);
};



// Example 1:

// Input: a = "11", b = "1"
// Output: "100"


// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"



// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.