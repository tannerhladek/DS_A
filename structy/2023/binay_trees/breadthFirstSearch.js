// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  // todo
  const res = []
  if (!root) {
    return res
  }
  
  const queue = [root]
  
  while (queue.length) {
    const cur = queue.shift()
    if (cur) {
      res.push(cur.val)
      queue.push(cur.left)
      queue.push(cur.right)
    }
  }
  
  return res
  
};

module.exports = {
  breadthFirstValues,
};
