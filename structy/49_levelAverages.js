// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const levelAverages = (root) => {
   // todo
   let res = []
   if (!root) return res

   let queue = [root]

   while (queue.length) {
      let len = queue.length
      let levelSum = 0;

      for (let i = 0; i < len; i++) {
         let cur = queue.shift()
         levelSum += cur.val
         if (cur.left) queue.push(cur.left)
         if (cur.right) queue.push(cur.right)
      }

      res.push(levelSum / len)
   }

   return res
};

















module.exports = {
   levelAverages
};
