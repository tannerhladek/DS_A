/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
   if (s.length % 2 !== 0) return false;

   const vals = { '(': ')', '{': '}', '[': ']' };
   const stack = [];

   for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (char in vals) {
         stack.push(char);
      } else {
         let key = stack.pop()
         if (vals[key] !== char) return false
      }
   };

   return !stack.length
};
