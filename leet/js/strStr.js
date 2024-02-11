// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle === "") return 0;

  for ( let i = 0; i < haystack.length; i++){
      if(haystack[i] === needle[0]){
          let found = true;
          for(let j = 0; j < needle.length; j++) {
              if(haystack[i+j] !== needle[j]){
                  found = false;
                  break;
              }
          }
          if(found) return i

      }
  }
  return -1;
};


// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.