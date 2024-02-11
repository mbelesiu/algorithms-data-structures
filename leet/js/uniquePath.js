// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

/*
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n, memo = {}) {

  const grid = `${m},${n}`;

  if (grid in memo) return memo[grid];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[grid] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[grid];
};

  // Example 1:
  // Input: m = 3, n = 7
  // Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down
// Example 3:

// Input: m = 7, n = 3
// Output: 28
// Example 4:

// Input: m = 3, n = 3
// Output: 6