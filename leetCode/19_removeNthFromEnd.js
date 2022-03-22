/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
   let dummy = new ListNode(null)
   dummy.next = head
   let tail = head
   let count = 0

   while (count < n) {
      tail = tail.next
      count++
   }

   let prev = dummy
   let target = head

   while (tail) {
      tail = tail.next
      prev = target
      target = target.next
   }

   prev.next = target.next

   return dummy.next

};
