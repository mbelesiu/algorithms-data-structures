// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }

  let commonPrefix = strs[0].split('');

  for (let i = 1; i < strs.length; i++) {
    let strLength = Math.min(strs[i].length, commonPrefix.length);
    commonPrefix.splice(strLength);

    commonPrefix.splice();
    for (let j = 0; j < strLength; j++) {
      if (commonPrefix[j] !== strs[i][j]) {
        commonPrefix.splice(j);
        break;
      }
    }
  }
  commonPrefix = commonPrefix.join('');
  return commonPrefix;
};