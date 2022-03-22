var mergeKLists = function (lists) {
   if (!lists.length) return null

   while (lists.length > 1) {
      let mergedLists = []
      for (let i = 0; i < lists.length; i += 2) {
         let cur1 = lists[i];
         let cur2 = null;
         if (i + 1 < lists.length) {
            cur2 = lists[i + 1]
         }
         mergedLists.push(mergeTwoLists(cur1, cur2))
      }
      lists = mergedLists
   }

   return lists[0]
};

const mergeTwoLists = (l1, l2) => {
   let dummy = new ListNode(null)
   let tail = dummy
   let cur1 = l1
   let cur2 = l2

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

   return dummy.next
}
