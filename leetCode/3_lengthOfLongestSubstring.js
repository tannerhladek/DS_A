/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
   let l = r = sum = maxSum = 0;
   let tracker = new Set();

   while (r < s.length) {
      if (!tracker.has(s[r])) {
         tracker.add(s[r]);
         sum += 1;
         maxSum = Math.max(maxSum, sum)
         r += 1;
      } else {
         l += 1;
         r = l;
         sum = 0;
         tracker = new Set();
      }
   }

   return maxSum
};
