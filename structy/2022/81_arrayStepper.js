const arrayStepper = (nums, i = 0, memo = {}) => {
   // todo
   if (i in memo) return memo[i]
   if (i >= nums.length - 1) return true

   let maxSteps = nums[i]
   for (let j = 1; j <= maxSteps; j++) {
      if (arrayStepper(nums, i + j, memo) === true) {
         memo[i] = true
         return true
      }
   }

   memo[i] = false
   return false

};






















module.exports = {
   arrayStepper
};
