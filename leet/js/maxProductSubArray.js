// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

/*
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

    let result = nums[0]
    let prevMax = nums[0]
    let prevMin = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin)
        let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax)

        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result)
    }

    return result

};

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.