/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numSet = new Set(nums)
  let longest = 0

  for (const num of nums) {
      // ensure num is start of sequence
      if (numSet.has(num - 1)) {
          continue
      }

      let streak = 1
      while(numSet.has(num + streak)) {
          streak++
      }

      longest = Math.max(streak, longest)
  }

  return longest
};