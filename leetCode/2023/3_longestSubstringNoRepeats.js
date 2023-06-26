/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0
  let left = 0
  let right = 0
  let tracker = {}

  while (right < s.length) {
      if (!(s[right] in tracker)) {
          tracker[s[right]] = right
      } else {
          left = Math.max(left, tracker[s[right]] + 1)
          tracker[s[right]] = right
      }
      max = Math.max(max, right - left + 1)
      right++
  }

  return max
};