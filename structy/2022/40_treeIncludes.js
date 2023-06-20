// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
   // todo

   if (!root) return false

   let queue = [root]

   while (queue.length) {
      let cur = queue.shift()
      if (cur.val === target) return true
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
   }

   return false
};

















module.exports = {
   treeIncludes
};
