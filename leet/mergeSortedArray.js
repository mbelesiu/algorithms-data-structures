// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {


  while(nums1[nums1.length-1] === 0){
      nums1.pop()
  }

  let i = 0;
  let j = 0;
  while(i < nums1.length && j < nums2.length) {
      if(nums1[i] >= nums2[j]) {
          nums1.splice(i,0,nums2[j]);
          j++;
      }
      i++
  }

  while(j < nums2.length) {
      nums1.push(nums2[j]);
      j++
  }

  while(nums1.length !== (n+m)){
      nums1.push(0);
  }

  return nums1
};

// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]


// Constraints:

// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n