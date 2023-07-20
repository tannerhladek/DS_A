// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  // todo
  let sum = 0
  
  const queue = [root]
  
  while (queue.length) {
    const cur = queue.shift()
    if (cur) {
      sum += cur.val
      queue.push(cur.left)
      queue.push(cur.right)
    }
  }
  
  return sum
  
};

module.exports = {
  treeSum,
};
