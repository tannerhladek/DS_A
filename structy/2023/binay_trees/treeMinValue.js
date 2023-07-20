// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
  // todo
  let min = Infinity
  const stack = [root]
  
  while (stack.length) {
    const cur = stack.pop()
    if (cur) {
      min = Math.min(min, cur.val)
      stack.push(cur.right)
      stack.push(cur.left)
    }
  }
  
  return min
};

module.exports = {
  treeMinValue,
};
