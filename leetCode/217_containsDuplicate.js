/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
   let numSet = new Set(nums);
   console.log(numSet.size)
   return !(nums.length === numSet.size)
};
