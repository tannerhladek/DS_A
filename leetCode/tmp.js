
var canJump = function (nums, i = 0, memo = {}) {
   // base cases
   debugger
   if (i in memo) return memo[i]
   if (i >= nums.length - 1) return true
   if (nums[i] === 0) {
      return false
   }

   let maxSteps = nums[i]
   while (maxSteps > 0) {
      debugger
      if (canJump(nums, i + maxSteps, memo)) {
         memo[i] = true
         return memo[i]
      }
      maxSteps--
   }

   memo[i] = false
   debugger
   return memo[i]
};

const nums = [3,2,1,0,4]
canJump(nums)
