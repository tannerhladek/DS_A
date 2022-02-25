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
var averageOfLevels = function (root) {
   const res = [];
   let queue = [root];

   while (queue.length) {
      let sum = 0;
      let size = queue.length;

      for (let i = 0; i < size; i++) {
         let currNode = queue.shift();
         sum += currNode.val
         if (currNode.left) queue.push(currNode.left)
         if (currNode.right) queue.push(currNode.right)
      }

      res.push(sum / size)
   }

   return res;
};
