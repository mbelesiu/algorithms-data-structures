// Given the root of a binary tree, flatten it to a linked list in-place.

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(!root){
      return
  }
  if(root.left){
      //do the insertion thing
      let rightSide = root.right;
      root.right = root.left;
      root.left = null;
      let p = root.right;
      while(p.right !== null){
          p = p.right;
      }
      p.right = rightSide;
  }
  flatten(root.right);
  return;
};

// Example 1:
// Convert
//       1
//      / \
//     2   5
//    / \   \
//   3   4   6
// Into
//       1
//        \
//         2
//          \
//           3
//            \
//             4
//              \
//               5
//                \
//                 6


// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]