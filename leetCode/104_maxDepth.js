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
 * @return {number}
 */
var maxDepth = function (root, height = 1) {
   if (!root) return 0
   if (!root.left && !root.right) return height

   let max = 0
   let left = maxDepth(root.left, height + 1)
   let right = maxDepth(root.right, height + 1)
   max = Math.max(left, right)

   return max
};
