class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

const createLinkedList = (values) => {
   // todo
   if (!values.length) return null

   let head = new Node(values[0]);
   let cur = head
   let prev = null;

   for (let i = 1; i < values.length; i++) {
      let val = values[i]
      let node = new Node(val)
      prev = cur
      cur.next = node
      cur = cur.next
   }

   return head
};



















module.exports = {
   createLinkedList
};
