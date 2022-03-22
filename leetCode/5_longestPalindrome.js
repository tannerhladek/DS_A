/**
 * @param {string} s
 * @return {string}
 */

// optimized
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
   let max = [0, 1]

   for (let i = 0; i < s.length; i++) {
      let even = isPalindrome(s, i - 1, i)
      let odd = isPalindrome(s, i - 1, i + 1)
      let cur = even[1] - even[0] > odd[1] - odd[0] ? even : odd
      max = cur[1] - cur[0] > max[1] - max[0] ? cur : max
   }

   return s.slice(...max)
};


const isPalindrome = (s, l, r) => {
   let left = l
   let right = r

   while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
   }

   return [left + 1, right]
}




// // brute force O(n^3)
// var longestPalindrome = function (s) {
//    let max = s[0];
//    for (let l = 0; l < s.length - 1; l++) {
//       let r = l + 1;
//       while (r < s.length) {
//          let string = s.substring(l, r + 1)
//          if (isPalindrome(string)) {
//             if (string.length > max.length) max = string
//          }
//          r++;
//       }
//    }
//    return max
// };

// const isPalindrome = (string) => {
//    let l = 0
//    let r = string.length - 1
//    while (l < r) {
//       if (string[l] !== string[r]) {
//          return false
//       }
//       l++
//       r--
//    }
//    return true
// }
