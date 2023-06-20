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
 * @return {TreeNode}
 */
var invertTree = function (root) {
   if (!root) return root

   let queue = [root]
   while (queue.length) {
      let n = queue.shift()
      let tmp = n.left
      n.left = n.right
      n.right = tmp
      if (n.left) queue.push(n.left)
      if (n.right) queue.push(n.right)
   }

   return root
};
