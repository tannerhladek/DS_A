// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
  let sum = 0
  let cur = head
  
  while (cur) {
    sum += cur.val
    cur = cur.next
  }
  
  return sum
};

module.exports = {
  sumList,
};
