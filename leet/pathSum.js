// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  let currentSum = 0;

  const helper = (node) => {
      if(!node){
          return false;
      }
      currentSum += node.val;
      if(node.left === null && node.right === null) {
          if(currentSum === sum) {
              return true;
          }
          currentSum -= node.val;
          return false;
      }

      let tot = helper(node.right) || helper(node.left);
      currentSum -= node.val;
      return tot;
  }

  return helper(root);

};

Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.