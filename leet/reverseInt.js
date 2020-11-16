// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
/*
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let r = 0;
  let num = Math.abs(x);

  while (num > 0) {
    r = r * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (x < 0) {
    r *= -1;
  }
  if (Math.abs(r) >= Math.pow(2, 31)) {
    return 0;
  }
  return r;
};