# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        sum = 0
        result = float('-inf')

        for num in nums:
            sum = sum + num
            result = max(result, sum)
            if sum < 0:
                sum = 0

        return result
