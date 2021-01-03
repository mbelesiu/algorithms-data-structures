// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/*
 * @param {number} n
 * @return {number}
 */
// Recursion w/ Memoization -- O(n)
var climbStairs = function(n) {

  const memo = [];

  const helper = (currentCount) => {
      if(currentCount > n){
          return 0;
      }
      if(currentCount === n){
          return 1;
      }

      if(memo[currentCount] > 0){
          return memo[currentCount];
      }

      memo[currentCount] = helper(currentCount+1) + helper(currentCount+2);
      return memo[currentCount];
  }

  return helper(0);
};

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Brute Force -- O(2^n) -- Really poor performance
var climbStairs = function (n) {
  // add the current leaft to the grand total
  // if you exceeded, do not add to the result count, return up
  // if you match, add to the result count, return up
  // if you still need mroe
  // you have two options at each leaf -> go right (1) or go left (2)

  let combos = 0;

  const helper = (currentCount) => {
    if (currentCount < 0) {
      return;
    }
    if (currentCount === 0) {
      combos++;
      return;
    }
    helper(currentCount - 1);
    helper(currentCount - 2);
    return;
  }

  helper(n);
  return combos;
};