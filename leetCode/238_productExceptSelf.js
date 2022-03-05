/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
   let left = [...nums].fill(1);
   let right = [...nums].fill(1);
   let res = [...nums];

   for (let i = 1; i < nums.length; i++) {
      left[i] = left[i - 1] * nums[i - 1]
   }

   for (let i = nums.length - 2; i >= 0; i--) {
      right[i] = right[i + 1] * nums[i + 1]
   }

   for (let i = 0; i < nums.length; i++) {
      res[i] = left[i] * right[i]
   }

   return res
};


// iterate through nums from left to right keeping track of product
//    - store in a different array
// iterate through nume from right to left tracking product
//   - store that in a different array
// return the array multiplied together
