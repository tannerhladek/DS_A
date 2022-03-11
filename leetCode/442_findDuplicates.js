/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
   let res = [];

   for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
      if (nums[index] < 1) {
         res.push(index + 1)
      } else {
         nums[index] = -1 * nums[index]
      }
   }

   return res
};

// all nums are positive
// numbers: 1 - n
// indexes: 0 - (n-1)
// [4,-3,2,-7,8,2,-3,-1]

