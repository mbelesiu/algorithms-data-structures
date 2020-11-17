// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


/*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length === 0) {
      return 0;
  }
  let result = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
      sum = sum + nums[i]
      result = Math.max(result, sum);
      sum = sum > 0 ? sum : 0;
  }
  return result;

};