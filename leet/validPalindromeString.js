// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

/*
 * @param {string} s
 * @return {boolean}
 */

const isAlphaNum = (c) => {
  return c.charCodeAt() >= 97 && c.charCodeAt() <= 122 || c.charCodeAt() >= 48 && c.charCodeAt() <= 57
}

var isPalindrome = function(s) {
  if(s.length === 0){
      return true;
  }
  let start = 0;
  let end = s.length-1;
  s = s.toLowerCase();

  while(start <= end){
      if(!isAlphaNum(s[start])){
          start++;
          continue;
      }
      if(!isAlphaNum(s[end])){
          end--;
          continue;
      }

      if(s[start] !== s[end]){
          return false;
      }
      start++;
      end--;
  }
  return true;
};

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false


// Constraints:

// s consists only of printable ASCII characters.