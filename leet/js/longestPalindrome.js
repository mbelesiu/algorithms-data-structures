// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
/*
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const hash = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }

  for (letter in hash) {
    count += Math.floor(hash[letter]/2)*2;
    if (count % 2 === 0 && hash[letter] % 2 === 1) {
      count++;
    }
  }

  return count;
};

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2


// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.