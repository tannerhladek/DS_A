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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {

   let node = new TreeNode(val)
   if (!root) return node

   let cur = root

   while (true) {
      if (val < cur.val) {
         if (cur.left) {
            cur = cur.left
         } else {
            cur.left = node
         }
      } else if (val > cur.val) {
         if (cur.right) {
            cur = cur.right
         } else {
            cur.right = node
         }
      } else {
         break
      }
   }

   return root
};
