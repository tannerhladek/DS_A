// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
   // todo
   if (!root) return []

   let res = []
   let stack = [root]

   while (stack.length) {
      const cur = stack.pop()
      res.push(cur.val)

      if (cur.right) stack.push(cur.right)
      if (cur.left) stack.push(cur.left)
   }

   return res
};


















module.exports = {
   depthFirstValues
};
