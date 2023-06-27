/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = right = maxLength = 0
  const tracker = {}
  
  while (right < s.length) {
      if (!(s[right] in tracker)) {
          tracker[s[right]] = 0
      }
      tracker[s[right]]++
      // find the max frequency
      let maxCount = 0
      for (const count of Object.values(tracker)) {
          maxCount = Math.max(maxCount, count)
      }

      if ((right - left + 1) - maxCount <= k) {
          maxLength = Math.max(maxLength, right - left + 1)
      } else {
          // update left pointer and tracker count
          tracker[s[left]]--
          left++
      }

      right++
  }

  return maxLength
};