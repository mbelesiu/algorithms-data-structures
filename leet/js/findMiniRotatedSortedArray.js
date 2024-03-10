// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

/*
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1

    while (l < r) {
        const m = ~~((l + r) / 2)
        if(nums[m] > nums [r]) l = m + 1
        else r = m
    }

    return nums[l]

};
// I'll be honest, I do not understand why we don't just do this. Rotating the array has nop affect on finding the min value

var findMin = function (nums) {
    let min = Infinity
    for (let i = 0; i < nums.length; i++){
        min = Math.min(min, nums[i])
    }
    return min
};