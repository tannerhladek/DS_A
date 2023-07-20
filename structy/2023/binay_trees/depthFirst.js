// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
  if (root === null) {
    return []
  }
  
  const vals = []
  const stack = [root]
  while (stack.length) {
    const cur = stack.pop()
    if (cur) {
      vals.push(cur.val)
      stack.push(cur.right)
      stack.push(cur.left)
    } 
  }
  
  return vals
};

module.exports = {
  depthFirstValues,
};
