class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

const insertNode = (head, value, index) => {
   // todo
   let node = new Node(value);

   if (index === 0) {
      node.next = head;
      return node;
   }

   let cur = head;
   let prev = null;
   let i = 0;

   while (i <= index) {
      if (i === index) {
         prev.next = node
         node.next = cur
         break
      }
      i++;
      prev = cur
      cur = cur.next
   }

   return head
};



















module.exports = {
   insertNode
};
