// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

//using sorting
var findKthLargest = function(nums, k) {
    nums.sort((a,b)=> a-b)

    index = nums.length - k

    return nums[index]
};

// not using sorting 