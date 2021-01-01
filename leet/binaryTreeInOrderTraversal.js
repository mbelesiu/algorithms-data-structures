// Given the root of a binary tree, return the inorder traversal of its nodes' values.
/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  const taversalInner = (node) =>{
      if(!node){
          return;
      }
      taversalInner(node.left);
      result.push(node.val);
      taversalInner(node.right);

  }

  taversalInner(root);
  return result;
};

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Example 4:
// Input: root = [1,2]
// Output: [2,1]

// Example 5:
// Input: root = [1,null,2]
// Output: [1,2]