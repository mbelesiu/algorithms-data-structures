// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:
// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107


/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 //using hashMap O(n)

var subarraySum = function(nums, k) {
  let resultCount = 0;
  let sum = 0;
  let sum_k = 0
  let hashMap = {'0' : 1}

  for( let i = 0; i < nums.length; i++){
      sum += nums[i];
      sum_k = sum - k;

      if(hashMap[sum_k]){
          resultCount += hashMap[sum_k];
      }
      hashMap[sum] ? hashMap[sum]++ : hashMap[sum] = 1;
  }
  return resultCount;
};
// "brute force" o(n^2)
var subarraySum = function(nums, k) {
  let resultCount = 0;
  let subCount = 0;

  for( let i = 0; i < nums.length; i++){
      subCount = nums[i]
      if(subCount === k) resultCount++;
      for(let j = i+1; j < nums.length; j++){
          subCount += nums[j]
          if(subCount === k) resultCount++;
      }
  }
  return resultCount;
};

