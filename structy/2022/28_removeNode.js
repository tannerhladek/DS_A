// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
   // todo
   if (head.val === targetVal) return head.next

   let cur = head
   let prev = null

   while (cur) {
      let next = cur.next
      if (cur.val === targetVal) {
         cur = prev
         cur.next = next
         break
      }
      prev = cur
      cur = cur.next
   }

   return head
};



















module.exports = {
   removeNode
};
