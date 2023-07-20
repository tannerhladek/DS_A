// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const maxPathSum = (root) => {
  // todo
  if (!root) {
    return -Infinity
  }
  
  if (root.left === null && root.right === null) {
    return root.val
  }
  
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right))
  
  return root.val + maxChild
};

module.exports = {
  maxPathSum,
};
