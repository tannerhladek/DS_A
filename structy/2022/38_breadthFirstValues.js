// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
   // todo
   if (!root) return []

   let res = []
   let queue = [root]

   while (queue.length) {
      let cur = queue.shift()
      res.push(cur.val)

      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
   }

   return res
};


















module.exports = {
   breadthFirstValues
};
