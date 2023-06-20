/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
   let currNode = head;
   const visited = new Set();

   while (currNode) {
      if (!visited.has(currNode)) {
         visited.add(currNode);
         currNode = currNode.next
      } else {
         return true
      }
   }

   return false;
};

// iterate through the linked list
// check if next of cur node is a node we already visited
// return false if next is ever null null

// // alt solution
// var hasCycle = function (head) {
//    let slow = fast = head;

//    while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;

//       if (slow === fast) return true
//    }

//    return false;
// };
