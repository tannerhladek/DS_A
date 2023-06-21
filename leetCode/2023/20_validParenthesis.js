/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const open = ['[', '{', '(']
  const map = {'[':']' , '{':'}' , '(':')' }
  

  for (const ele of s) {
      if (open.includes(ele)) {
          stack.push(ele);
          continue
      }

      if(map[stack.pop()] !== ele) {
          return false
      }
  }

  return stack.length === 0
};