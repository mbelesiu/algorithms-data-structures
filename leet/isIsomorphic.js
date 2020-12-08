/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if(s.length !== t.length){
      return false;
  }
  let obj = {};
  let obj2 = {};

  for(let i = 0; i < s.length; i++){
      if(!obj[t[i]] && !obj2[s[i]]){
          obj[t[i]] = s[i]
          obj2[s[i]] = t[i];
      } else if( obj[t[i]] !== s[i] || obj2[s[i]] !== t[i]){
          return false;
      }
  }
  console.log(obj)
console.log(obj2)
  return true;


};

// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.