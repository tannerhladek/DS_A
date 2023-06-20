// DRY version
const addLists = (head1, head2) => {
   // todo

   let head = new Node(null)
   let tail = head;

   let cur1 = head1
   let cur2 = head2
   let rem = 0

   while (cur1 || cur2 || rem) {
      const val1 = cur1 === null ? 0 : cur1.val
      const val2 = cur2 === null ? 0 : cur2.val
      const sum = val1 + val2 + rem

      rem = sum > 9 ? 1 : 0

      const newVal = sum % 10
      tail.next = new Node(newVal)
      tail = tail.next

      if (cur1) cur1 = cur1.next
      if (cur2) cur1 = cur2.next
   }

   return head.next
};


// // original working version
// class Node {
//    constructor(val) {
//       this.val = val;
//       this.next = null;
//    }
// }

// const addLists = (head1, head2) => {
//    // todo

//    let head = new Node(null)
//    let tail = head
//    let cur1 = head1
//    let cur2 = head2
//    let rem = 0

//    while (cur1 && cur2) {
//       let sum = cur1.val + cur2.val + rem
//       if (sum < 10) {
//          tail.next = new Node(sum)
//          rem = 0
//       } else {
//          rem = 1
//          tail.next = new Node((sum % 10))
//       }
//       tail = tail.next
//       cur1 = cur1.next
//       cur2 = cur2.next
//    }

//    while (rem) {
//       if (cur1) {
//          let sum = cur1.val + rem
//          if (sum < 10) {
//             tail.next = new Node(sum)
//             rem = 0
//          } else {
//             rem = 1
//             tail.next = new Node((sum % 10))
//          }
//          cur1 = cur1.next
//       } else if (cur2) {
//          let sum = cur2.val + rem
//          if (sum < 10) {
//             tail.next = new Node(sum)
//             rem = 0
//          } else {
//             rem = 1
//             tail.next = new Node((sum % 10))
//          }
//          cur2 = cur2.next
//       } else {
//          tail.next = new Node(rem)
//          rem = 0
//       }
//       tail = tail.next
//    }

//    if (!cur1) tail.next = cur2
//    if (!cur2) tail.next = cur1

//    return head.next
// };











// module.exports = {
//    addLists
// };
