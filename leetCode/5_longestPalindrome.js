/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
   let max = s[0];
   for (let l = 0; l < s.length - 1; l++) {
      let r = l + 1;
      while (r < s.length) {
         let string = s.substring(l, r + 1)
         if (isPalindrome(string)) {
            if (string.length > max.length) max = string
         }
         r++;
      }
   }
   return max
};

const isPalindrome = (string) => {
   let l = 0
   let r = string.length - 1
   while (l < r) {
      if (string[l] !== string[r]) {
         return false
      }
      l++
      r--
   }
   return true
}


