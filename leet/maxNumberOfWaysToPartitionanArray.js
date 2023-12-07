// You are given a 0-indexed integer array nums of length n. The number of ways to partition nums is the number of pivot indices that satisfy both conditions:

// 1 <= pivot < n
// nums[0] + nums[1] + ... + nums[pivot - 1] == nums[pivot] + nums[pivot + 1] + ... + nums[n - 1]
// You are also given an integer k. You can choose to change the value of one element of nums to k, or to leave the array unchanged.

// Return the maximum possible number of ways to partition nums to satisfy both conditions after changing at most one element.

var waysToPartition = function(nums, k) {
    const partitionIfChange = Array(nums.length+1).fill(0)
    const totalSum = nums.reduce((s,n)=> s+n, 0)
    const hash = new Map()

    let sum = 0
    for (let i = 0; i<nums.length-1; i++) {
        sum += nums[i]
        if(2*sum === totalSum) {
            partitionIfChange[nums.length] += 1
        }
    }

    sum = 0
    for (let i=0; i< nums.length; i++) {
        const num = nums[i]
        sum += num
        const numToChange = totalSum + k - 2 * sum
        partitionIfChange[i] += hash.get(num) ?? 0
        hash.set(numToChange, (hash.get(numToChange) ?? 0) +1)
        }
    sum = 0
    hash.clear()
    for (let i=nums.length-1; 0 <=i ; i--) {
        const num = nums[i]
        sum += num
        const numToChange = totalSum + k - 2 * sum
        partitionIfChange[i] += hash.get(num) ?? 0
        hash.set(numToChange, (hash.get(numToChange) ?? 0) +1)
        }

        return _.max(partitionIfChange)


};

// Example 1:

// Input: nums = [2,-1,2], k = 3
// Output: 1
// Explanation: One optimal approach is to change nums[0] to k. The array becomes [3,-1,2].
// There is one way to partition the array:
// - For pivot = 2, we have the partition [3,-1 | 2]: 3 + -1 == 2.
// Example 2:

// Input: nums = [0,0,0], k = 1
// Output: 2
// Explanation: The optimal approach is to leave the array unchanged.
// There are two ways to partition the array:
// - For pivot = 1, we have the partition [0 | 0,0]: 0 == 0 + 0.
// - For pivot = 2, we have the partition [0,0 | 0]: 0 + 0 == 0.
// Example 3:

// Input: nums = [22,4,-25,-20,-15,15,-16,7,19,-10,0,-13,-14], k = -33
// Output: 4
// Explanation: One optimal approach is to change nums[2] to k. The array becomes [22,4,-33,-20,-15,15,-16,7,19,-10,0,-13,-14].
// There are four ways to partition the array.

// EXPLAINATION

// Intuition
// If no element is allowed to change, it is stratight forward to find the number of possible partitions; we iterate through each element and see if the sum of its preceding elements is half the total sum.

// Now, if an element has to changed, find which number should be changed.
// For example, let's say index 0 is taken as a pivot for [2, -1, 2] and k=3.

// 2 | -1 2

// For simplicity first assume that we can change an element on the right side of the pivot only.
// The sum of elements on left is 2 and the total sum is 3.
// In order for this partition to work, number 2 (regardless of its position) should be changed to k, so that the total sum after the change becomes totalSum - numToChange + k = 3 - 2 + 3 = 4 = 2 * 2 = 2 * (sum of elements on left).
// If any 2 on the right side of the pivot is changed to k, we get +1 partition available.
// We keep this information in a store (this is hash in code below) and apply it if we meet 2 as we go through the list further.
// Likewise, we can find the number to change for each iteration.
// numToChange = totalSum + k - 2 * (sum of elements on left)

// Since we first assumed that only an element on the right side of pivot can change, we iterate the array in the opposite direction to count all cases.

