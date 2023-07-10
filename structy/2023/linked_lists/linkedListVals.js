// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  const res = []
  let cur = head
  while (cur) {
    res.push(cur.val)
    cur = cur.next
  }
  return res
};

module.exports = {
  linkedListValues,
};
