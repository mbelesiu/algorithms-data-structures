/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

  let result = true;

  const helper = (node) => {
      if(node === null){
          return 0;
      }

      if(node.left === null && node.right === null) {
          return 1;
      }
      let left_val;
      let right_val;
      if(result){
           left_val = helper(node.left);
           right_val = helper(node.right);
      } else {
           left_val = 0;
           right_val = 0;
      }


      if(Math.abs(left_val-right_val) > 1){
          result = false;
      }

      return (Math.max(left_val, right_val)+1);

  }
  helper(root);
  return result

};