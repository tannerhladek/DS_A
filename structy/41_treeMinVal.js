// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
   // todo
   let min = root.val
   let queue = [root]

   while (queue.length) {
      let cur = queue.shift()
      min = Math.min(min, cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
   }

   return min
};

















module.exports = {
   treeMinValue
};
