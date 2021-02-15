// Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

/*
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (str) {
    const len = str.length - 1;
    const memo = [];
    for (let i = 0; i <= len; i++) {
        memo.push([]);
        for (let k = len; k >= 0; k--) {
            if (str[i] === str[k]) memo[i][k] = (memo[i - 1] && memo[i - 1][k + 1] || 0) + 1;
            else memo[i][k] = Math.max(memo[i][k + 1] || 0, memo[i - 1] && memo[i - 1][k] || 0);
        }
    }
    return memo[len][0];
}


// Example 1:

// Input:
// "bbbab"
// Output:
// 4
// One possible longest palindromic subsequence is "bbbb".
 
// Example 2:
 
// Input:
// "cbbd"
// Output:
// 2
// One possible longest palindromic subsequence is "bb".