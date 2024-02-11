// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.



/*
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

  if(s.length===0  || s[0]==='0') return 0

      if(s.length===1) return 1

      let d = [1]

      for(let i=1 ; i < s.length; i ++){
          d[i] = s[i] === '0' ? 0 : d[i-1]
          let sub = s.substring(i-1, i+1)
          if(sub >= "10" && sub <= "26")
              d[i] += (i > 1 ? d[i-2] : 1)
      }
      return d[s.length-1]
  };



// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "0"
// Output: 0
// Explanation: There is no character that is mapped to a number starting with '0'. We cannot ignore a zero when we face it while decoding. So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.
// Example 4:

// Input: s = "1"
// Output: 1


// Constraints:

// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).