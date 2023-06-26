/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let max = 0

  while (left < right) {
      const length = right - left

      if (height[right] >= height[left]) {
          max = Math.max(max, height[left] * length) 
          left++
      } else {
          max = Math.max(max, height[right] * length) 
          right--
      }
  }

  return max
};