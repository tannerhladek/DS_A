var mergeTwoLists = function (list1, list2) {

   if (!list1) return list2
   if (!list2) return list1

   let cur1 = list1
   let cur2 = list2
   let dummyHead = new ListNode(null)
   let tail = dummyHead

   while (cur1 && cur2) {
      if (cur1.val < cur2.val) {
         tail.next = cur1
         cur1 = cur1.next
      } else {
         tail.next = cur2
         cur2 = cur2.next
      }
      tail = tail.next
   }

   if (!cur1) tail.next = cur2
   if (!cur2) tail.next = cur1

   return dummyHead.next
};

// iterate through both lists
// track tail of each list
// check which node value is lesser
// move lesser value into list res list
//  - move cur of lesser list to cur.next

// 1 -> 2 - > null
//
// 2 -> 3 -> 4 -> 5
// c

// list3
// 1 -> 2 -> 2 -> 3 -> 4 -> 5
//    
