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
 * @return {number}
 */
var minDepth = function(root) {
  if(root === null){
      return 0
  }
let minCount = Infinity;

const findMinDepth = (node, depth) =>{
  if(node === null){
      return Infinity;
  }
  if(node.left === null && node.right===null){
      return depth
  }

  depth++;
  return Math.min(findMinDepth(node.left, depth), findMinDepth(node.right, depth))
}

return findMinDepth(root, 1)
};