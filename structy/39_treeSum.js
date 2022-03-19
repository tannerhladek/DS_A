// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
   // todo
   if (!root) return 0

   let sum = 0
   let queue = [root]

   while (queue.length) {
      const cur = queue.shift()
      sum += cur.val

      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
   }

   return sum
};


















module.exports = {
   treeSum
};
