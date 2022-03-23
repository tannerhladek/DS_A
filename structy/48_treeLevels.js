// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeLevels = (root) => {
   // todo
   let res = []
   if (!root) return res

   let queue = [root];

   while (queue.length) {
      let len = queue.length
      let level = []
      for (let i = 0; i < len; i++) {
         let cur = queue.shift()
         if (cur.left) queue.push(cur.left)
         if (cur.right) queue.push(cur.right)
         level.push(cur.val)
      }
      res.push(level)
   }

   return res
};














module.exports = {
   treeLevels
};
