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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    let small, big, prev = null;
    const recover = (node) => {
        if (!node) return
        recover(node.left)
        if (prev && prev.val > node.val) {
            small = node
            if (big) return
            big = prev
        }
        prev = node
        recover(node.right)
        return
    }
    recover(root);
    [small.val, big.val] = [big.val, small.val];
};
var recoverTree = function (root) {
    let small = null, big = null, prev = null
    
    const recover = (node) => {
        if (!node) return
        recover(node.left)
        if (prev && prev.val > node.val) {
            small = node
            if (big) return
            big = prev
        }
        prev = node
        recover(node.right)
        return
    }
    recover(root)
    [small.val, big.val] = [big.val, small.val];
};