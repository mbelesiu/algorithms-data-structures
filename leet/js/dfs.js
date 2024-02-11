// Given the root of a binary tree, return the postorder traversal of its nodes' values.
/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
  if(!root) return [];
  const result = [];

  dfs = (node) => {
      if(node.left) dfs(node.left);
      if(node.right) dfs(node.right);
      result.push(node.val);
      return
  }
  dfs(root);
  return result
};