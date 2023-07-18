// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  let cur = head
  while (cur) {
    if (cur.val === target) {
      return true
    }
    cur = cur.next
  }
  
  return false
};

module.exports = {
  linkedListFind,
};
