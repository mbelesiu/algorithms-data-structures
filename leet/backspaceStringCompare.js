// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {

  let i = s.length - 1;
  let j = t.length -1;
  let sSkip = 0;
  let tSkip = 0;

  while(i >=0 || j >= 0) {
      while(i>=0){
          if(s[i] === '#') {
              sSkip++;
              i--;
          } else if (sSkip > 0) {
              sSkip--;
              i--;
          } else {
              break;
          }
      }
      while(j>=0){
          if(t[j] === '#') {
              tSkip++;
              j--;
          } else if (tSkip > 0) {
              tSkip--;
              j--;
          } else {
              break;
          }
      }
      if(i>=0 && j >=0 && s[i] != t[j]){
          return false
      }
      if((i>=0) != (j>=0)){
         return false
         }
      i--;
      j--;
  }
  return true
};
/*
Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a##c", t = "#a#c"
Output: true
Explanation: Both s and t become "c".
Example 4:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
*/