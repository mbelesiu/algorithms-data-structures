# Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

# We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

# You must solve this problem without using the library's sort function.


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # you can do it with the line of code below
        # nums.sort()
        # but lets have some fun, shall we?
        i, j = 0, 0
        k = len(nums)-1

        while j <= k:

            if nums[j] == 0:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
                j += 1
            elif nums[j] == 1:
                j += 1
            else:
                nums[j], nums[k] = nums[k], nums[j]
                k -= 1


# Example 1:

# Input: nums = [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]
# Example 2:

# Input: nums = [2,0,1]
# Output: [0,1,2]
# Example 3:

# Input: nums = [0]
# Output: [0]
# Example 4:

# Input: nums = [1]
# Output: [1]


# Constraints:

# n == nums.length

# 1 <= n <= 300
# nums[i] is 0, 1, or 2.


# Follow up: Could you come up with a one-pass algorithm using only constant extra space?
