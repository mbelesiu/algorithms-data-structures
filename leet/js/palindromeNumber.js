// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Follow up: Could you solve it without converting the integer to a string?

/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0){
      return false;
  }

  let number = x.toString()
  let start = 0;
  let end = number.length-1;
  while(start < end) {
      if(number[start] !== number[end]){
          return false;
      }
      start++;
      end --;
  }
  return true;
};