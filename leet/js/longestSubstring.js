// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let largestSubstring = 0;
  let count = 0;
  let tracker = {};
  let index = 0;

  for (let i = 0; i < s.length; i++) {

    if (tracker[s[i]]) {
      largestSubstring = largestSubstring >= count ? largestSubstring : count;
      count = 0;
      tracker = {};
      index++;
      i = index;
    }
      tracker[s[i]] = true;
      count++;
  }
  largestSubstring = largestSubstring >= count ? largestSubstring : count
  return largestSubstring;
};


 // for each item in string
    // add them to an object
    // if that letter matches the object key
    //  stop there, thats a subset
    //  see if that length is the longest, if yes, keep it, else, move on