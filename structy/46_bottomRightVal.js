// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const bottomRightValue = (root) => {
   // todo
   let queue = [root]
   let rMost = root

   while (queue.length) {
      const size = queue.length
      for (let i = 0; i < size; i++) {
         const cur = queue.shift()
         if (cur.left) queue.push(cur.left)
         if (cur.right) queue.push(cur.right)
         rMost = cur
      }
   }

   return rMost.val
};














module.exports = {
   bottomRightValue
};
