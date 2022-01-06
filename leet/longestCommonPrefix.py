# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".


# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ''

        commonPrefix = ''
        smallestSize = min(len(ele) for ele in strs)

        for i in range(smallestSize):
            letter = strs[0][i]

            for word in strs:
                if letter != word[i]:
                    return commonPrefix

            commonPrefix = commonPrefix + letter

        return commonPrefix
