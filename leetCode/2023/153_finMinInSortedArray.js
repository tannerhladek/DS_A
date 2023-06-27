/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // find the portion that contains the lower half
  let left = 0;
  let right = nums.length - 1
  let res = nums[left]

  while (left <= right) {
      // portion of array is sorted
      if (nums[left] <= nums[right]) {
          res = Math.min(res, nums[left])
          break
      }

      // choose which portion to continue search
      const mid = Math.floor((right + left) / 2) 
      res = Math.min(res, nums[mid])
      if (nums[mid] >= nums[left]) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }

  return res
};