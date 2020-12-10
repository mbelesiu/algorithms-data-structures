// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a,b) => a - b);
  const results = [];
  let left = 0;
  let right = nums.length - 1;
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
      if (i === 0 || nums[i - 1] !== nums[i]){
          left = i + 1;
          right = nums.length - 1;
          while (left < right) {
              let currentSum = nums[i] + nums[left] + nums[right];
              if (currentSum < 0)
                  left++;
              else if (currentSum > 0)
                  right--;
              else if (currentSum === 0) {
                  results.push([nums[i], nums[left], nums[right]]);
                  left++;
                  right--;
                  while (left < right && nums[left] === nums[left - 1]) {
                      left++;
                  }
      }
  }
 }
}
  return results;
};


// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []


// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105