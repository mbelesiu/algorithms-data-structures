// 523. Continuous Subarray Sum
// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:

// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

// How to think about this one.
// You are going to store the remainder of the current sum in respects to K 
// (the number we are looking to have a multiple of)
// You start with remainder 0 (in the case you find the number exactly)
// and as you go through the array, you save all the remainders of the new sum. 
// If you at aby point find that a remainder is in the hash table, then you won
// otherwise, no dice 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {

	let sum = 0
	
	let prefix = 0;
	
	const hash = new Set();
	
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		if (k != 0) sum %= k
		if(hash.has(sum)){
            console.log(i)
           return true 
        } 
		hash.add(prefix);
		prefix = sum;
	}
	return false
};

// Example 1:

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
// Example 2:

// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// Example 3:

// Input: nums = [23,2,6,4,7], k = 13
// Output: false

