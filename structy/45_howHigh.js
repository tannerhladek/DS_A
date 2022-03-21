// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
   // todo
   if (!node) return -1
   if (!node.left && !node.right) return 0

   return 1 + Math.max(howHigh(node.left), howHigh(node.right))
};


















module.exports = {
   howHigh
};
