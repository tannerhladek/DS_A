var threeSum = function (nums) {
   let tracker = new Set()
   let res = []
   for (let i = 0; i < nums.length - 2; i++) {
      let n1 = nums[i]
      if (tracker.has(n1)) continue
      tracker.add(n1)
      for (let j = 1; j < nums.length - 1; j++) {
         let n2 = nums[j]
         if (!tracker.has(n2)) {
            for (let k = 2; k < nums.length; k++) {
               let n3 = nums[k]
               if (!tracker.has(n3) && (n1 + n2 + n3 === 0)) {
                  res.push([n1,n2,n3])
               }
            }
         }

      }
   }

   return res
};
