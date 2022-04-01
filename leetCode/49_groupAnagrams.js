/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

   let obj = {}
   for (let i = 0; i < strs.length; i++) {
      let cur = strs[i].split('').sort().join('')
      if (!(cur in obj)) obj[cur] = []
      obj[cur].push(strs[i])
   }

   return Object.values(obj)
};
