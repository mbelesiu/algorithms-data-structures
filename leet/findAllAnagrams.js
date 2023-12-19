// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const neededChar = {}
    const indices = []

    for (let char of p) {
        if (char in neededChar) {
            neededChar[char]++
        } else {
            neededChar[char] = 1
        }
    }

    let left = 0, right = 0
    let count = p.length
    while (right < s.length) {
        if (neededChar[s[right]] > 0) {
            count--;
        }
        neededChar[s[right]]--
        right++
        if (count === 0) {
            indices.push(left)
        }

        if (right - left === p.length) {
            if (neededChar[s[left]] >= 0) {
                count++
            }
            neededChar[s[left]]++
            left++
        }

    }
    return indices
};

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".