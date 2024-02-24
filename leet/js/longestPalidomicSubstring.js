// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

/*
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = '';
  for(let i = 0; i < s.length; i++ ) {
      let substring = s[i];
      for(let j = (i + 1); j < s.length; j++) {
          substring = substring + s[j];
          if (s[i].toLowerCase() === s[j].toLowerCase()) {
              let k = i;
              let l = j;
              let isPalindrome = true;
              while (k <= l) {
                  if(s[k] !== s[l]){
                      isPalindrome = false;
                      break;
                  }
                  k++;
                  l--;
              }

              if ((substring.length > result.length) && isPalindrome){
                  result = substring;
              }
          }
      }
  }
  return result.length === 0 ? s[0] : result;
};

// s-> string
// results = ''
// iterate through the string i
//      holding that first posistion, iterate through the rest of the string j
//      tempresult = s[i]
//      for rest of substring
//          tempresult += s[j]
//          check if s[i] === s[j]
//              know its palindroic, check if its longer than the current result
//                  if its longers, replace results with elements s[i]...s[j]
//                  else, move along
// return resullt!!!!


/// to check the paladorminess of the solution
//