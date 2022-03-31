/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums, i = 0, memo = {}) {

   if (i in memo) return memo[i]
   if (i >= nums.length) return 0

   let include = nums[i] + rob(nums, i + 2, memo)
   let exclude = rob(nums, i + 1, memo)
   let max = Math.max(include, exclude)

   memo[i] = max
   return memo[i]
};
