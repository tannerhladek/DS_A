/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums, i = 0, memo = {}) {
   if (i in memo) return memo[i]
   if (i >= nums.length - 1) {
      memo[i] = true
      return true
   }

   let num = nums[i]

   while (num > 0) {
      if (canJump(nums, num + i, memo)) return true
      else num--
   }

   memo[i] = false
   return false
};
