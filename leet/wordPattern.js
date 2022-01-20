

var wordPattern = function (pattern, s) {

  const arr = s.split(" ");
  const hash = {}
  const word = {}

  if (pattern.length != arr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (word.hasOwnProperty(pattern[i]) && hash.hasOwnProperty(arr[i])) {
      if (hash[arr[i]] !== pattern[i] || word[pattern[i]] !== arr[i]) {
        return false
      }
    } else if (word.hasOwnProperty(pattern[i]) || hash.hasOwnProperty(arr[i])) {
      return false;
    } else {
      hash[arr[i]] = pattern[i]
      word[pattern[i]] = arr[i]
    }
  }

  return true

};


// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false


// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.