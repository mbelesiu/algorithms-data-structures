// Given an unsorted integer array nums, find the smallest missing positive integer.

// Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?

/*
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

  nums.sort((a,b)=>{
      return a-b;
  })
  const hash = {};
  let counter = 1;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] <= 0 || hash[nums[i]]){
          continue;
      }
      if(nums[i] !== counter){
          return counter;
      }
      hash[counter] = true;
      counter++;

  }
  return counter;
};


// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1