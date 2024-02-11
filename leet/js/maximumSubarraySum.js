// You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

// SLIDING WINDOW PROBLEM 

var maximumSubarraySum = function (nums, k) {
    const elementFreq = new Map()
    let currentSum = 0, maxSum = 0
    let i = 0
    // Loop over the elements untill you have your first window
    // record the currSum and keep adding the num[i] to your map
    while (i < k) {
        currentSum += nums[i]
        elementFreq.set(nums[i], (elementFreq.get(nums[i]) || 0) + 1)
        i++
    }
    // Check if the all the elements in your window is unique
    if (elementFreq.size === k) {
        maxSum = Math.max(maxSum, currentSum)
    }

    while (i < nums.length) {
        currentSum -= nums[i - k]
        elementFreq.set(nums[i - k], (elementFreq.get(nums[i - k]) || 0) - 1)
        if (elementFreq.get(nums[i - k]) === 0) {
            elementFreq.delete(nums[i - k])
        }
        currentSum += nums[i]
        elementFreq.set(nums[i], (elementFreq.get(nums[i]) || 0) + 1)
        if (elementFreq.size === k) {
            maxSum = Math.max(maxSum, currentSum)
        }
        i++
    }
    return maxSum

};

// Example 1:

// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
// Example 2:

// Input: nums = [4,4,4], k = 3
// Output: 0
// Explanation: The subarrays of nums with length 3 are:
// - [4,4,4] which does not meet the requirements because the element 4 is repeated.
// We return 0 because no subarrays meet the conditions.