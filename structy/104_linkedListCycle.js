// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListCycle = (head) => {
   // todo
   if (!head) return false

   let slow = head
   let fast = head

   while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) return true
   }

   return false
};
















module.exports = {
   linkedListCycle
};
