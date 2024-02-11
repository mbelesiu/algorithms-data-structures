/**
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
var preorderTraversal = function(root) {
    const result = []
    const preOrder = (node) =>{
        if(!node) {
            return
        }
        result.push(node.val)
        preOrder(node.left)
        preOrder(node.right)
    } 

    preOrder(root)
    return result
};