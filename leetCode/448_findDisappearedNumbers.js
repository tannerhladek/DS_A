// O(1) time and space
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

   for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
      if (nums[index] > 0) {
         nums[index] = -nums[index]
      }
   }

   let res = [];
   nums.forEach((num, i) => {
      if (num > 0) res.push(i + 1)
   })

   return res
};

// // O(n) space
// var findDisappearedNumbers = function (nums) {
//    const numSet = new Set(nums);
//    const result = [];

//    for (let i = 1; i <= nums.length; i++) {
//       if (numSet.has(i)) continue
//       else result.push(i)
//    };

//    return result
// };
