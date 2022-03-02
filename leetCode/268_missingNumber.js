/**
 * @param {number[]} nums
 * @return {number}
 */


// using hash Set
var missingNumber = function (nums) {
   const numSet = new Set(nums);
   for (let i = 0; i <= nums.length; i++) {
      if (numSet.has(i)) continue;
      else return i
   }
};
