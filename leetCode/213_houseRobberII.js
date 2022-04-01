// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var rob = function (nums) {
//    if (nums.length === 1) return nums[0]

//    let n1 = _rob1(nums.slice(0, nums.length - 1))
//    let n2 = _rob1(nums.slice(1))

//    return Math.max(n1, n2)
// };

// // rob non-circle array
// let _rob1 = (nums, i = 0, memo = {}) => {

//    if (i in memo) return memo[i]
//    if (i >= nums.length) return 0

//    let include = nums[i] + _rob1(nums, i + 2, memo)
//    let exclude = _rob1(nums, i + 1, memo)
//    let max = Math.max(include, exclude)

//    memo[i] = max
//    return memo[i]
// }

// round 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
   if (nums.length === 1) return nums[0]

   let opt1 = _rob(nums.slice(1))
   let opt2 = _rob(nums.slice(0, nums.length - 1))

   return Math.max(opt1, opt2)
};

const _rob = (nums, i = 0, memo = {}) => {
   if (i in memo) return memo[i]
   if (i >= nums.length) return 0

   let include = nums[i] + _rob(nums, i + 2, memo)
   let exclude = _rob(nums, i + 1, memo)

   memo[i] = Math.max(include, exclude)
   return memo[i]
}
