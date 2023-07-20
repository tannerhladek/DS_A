// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
  // todo
  if (!root) {
    return root === target
  }
  
  const stack = [root]
  while (stack.length) {
    const cur = stack.pop()
    if (cur) {
      if (cur.val === target) {
        return true
      }
      stack.push(cur.right)
      stack.push(cur.left)
    }
  }
  
  return false
};

module.exports = {
  treeIncludes,
};
