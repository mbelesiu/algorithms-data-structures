# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return self.isBalancedHelper(root) != -1

    def isBalancedHelper(self, node):
        if not node:
            return 0

        left = self.isBalancedHelper(node.left)
        right = self.isBalancedHelper(node.right)

        if left == -1 or right == -1 or abs(left-right) > 1:
            return -1  # Houston, we have a balance problem
        return max(left, right) + 1
