// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

//Explanation
// Since no divide is allowed, you need to use this voodoo math magic bullshit
// using two arrays, one going left and the other going right, you need to fill
// each index with a multiplication of that index with the total prod, starting at 1
// so for left, and using [1,2,3,4]
//              [1, (1)*1, (1)*2, (2)*3] == [1,1,3,6]
// for the right
//              [(12)*2,(4)*3,(1)*4,1]   == [24,12,4,1]
// then multiply the two together.. 
//              [24,12,8,6]
// tada!?....... 🙄
// ok thinking this a little more, by offsetting it by one, you are missing the number at it's current position. 
//Ok maybe that's kinda neat


var productExceptSelf = function(nums) {
    const leftArr = []
    const rightArr = []
    let leftMult = 1
    let rightMult = 1

    for(let i = 0; i < nums.length; i++) {
        leftArr[i] = leftMult
        leftMult *= nums[i]
    }
    for(let i = nums.length-1; i >= 0; i--) {
        rightArr[i] = rightMult
        rightMult *= nums[i]
        rightArr[i] *= leftArr[i]
    }
    return rightArr
};


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]