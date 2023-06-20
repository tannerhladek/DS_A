/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
   nums.sort((a, b) => a - b)
   let res = []

   for (let i = 0; i < nums.length - 2; i++) {
      let n1 = nums[i]
      let l = i + 1
      let r = nums.length - 1

      if (i > 0 && nums[i] === nums[i - 1]) continue

      while (l < r) {
         let n2 = nums[l]
         let n3 = nums[r]
         let sum = n1 + n2 + n3

         if (sum > 0) r--
         else if (sum < 0) l++
         else {
            res.push([n1, n2, n3])
            l++
            while (nums[l] === nums[l - 1]) l++
         }
      }
   }

   return res
};
