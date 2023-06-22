/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const chars = '1234567890abcdefghijklmnopqrstuvwxyz'
  const charSet = new Set(chars.split(''));

  let left = 0;
  let right = s.length - 1

  while (left < right) {
      const leftLower = s[left].toLowerCase()
      const rightLower = s[right].toLowerCase()

      if (!charSet.has(leftLower)) {
          left++
          continue
      }

      if (!charSet.has(rightLower)) {
          right--
          continue
      }

      if (leftLower !== rightLower) {
          return false
      }
      left++
      right--
  }

  return true
};