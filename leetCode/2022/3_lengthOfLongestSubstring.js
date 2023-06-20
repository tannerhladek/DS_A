/**
 * @param {string} s
 * @return {number}
 */

// most efficient solution - optimized sliding window - (pointers never move backwards)
var lengthOfLongestSubstring = function (s) {
   let l = r = maxSum = 0;
   let tracker = {};

   while (r < s.length) {
      let char = s[r];
      if (!(char in tracker)) {
         tracker[char] = r;
      } else {
         l = Math.max(l, tracker[char] + 1);
         tracker[char] = r
      }
      maxSum = Math.max(maxSum, r - l + 1)
      r++;
   }
   return maxSum
};




// // using sliding window
// var lengthOfLongestSubstring = function (s) {
//    let l = r = sum = maxSum = 0;
//    let tracker = new Set();

//    while (r < s.length) {
//       if (!tracker.has(s[r])) {
//          tracker.add(s[r]);
//          sum += 1;
//          maxSum = Math.max(maxSum, sum)
//          r += 1;
//       } else {
//          l += 1;
//          r = l;
//          sum = 0;
//          tracker = new Set();
//       }
//    }

//    return maxSum
// };
