// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// iterative
const leafList = (root) => {
   // todo
   let res = []
   if (!root) return res

   let stack = [root]

   while (stack.length) {
      let cur = stack.pop()
      if (!cur.left && !cur.right) {
         res.push(cur.val)
         continue
      }
      if (cur.right) stack.push(cur.right)
      if (cur.left) stack.push(cur.left)
   }

   return res
};

// // recursive
// const leafList = (root) => {
//    let res = []
//    findLeaves(root, res)
//    return res
// };

// const findLeaves = (root, leaves) => {
//    if (!root) return
//    if (!root.left && !root.right) leaves.push(root.val)
//    findLeaves(root.left, leaves)
//    findLeaves(root.right, leaves)
// }
















module.exports = {
   leafList
};
