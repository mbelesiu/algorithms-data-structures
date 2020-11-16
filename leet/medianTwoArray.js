// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.


/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const halfsize = (nums1.length + nums2.length ) / 2;
  let halfList = [];
  let n1 = 0;
  let n2 = 0;
  for(let i = 0; i <= halfsize; i++){
      if(nums1[n1] >= nums2[n2] || n1 >= nums1.length){
          halfList.push(nums2[n2]);
          n2++;
      } else if (nums2[n2] > nums1[n1] || n2 >= nums2.length) {
          halfList.push(nums1[n1]);
          n1++
      }
  }
  if((nums1.length + nums2.length ) % 2 === 0){
      let over = halfList.pop();
      let under = halfList.pop();
      return ((over+under)/2)
  }
  return halfList.pop();
};