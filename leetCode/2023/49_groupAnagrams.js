/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
      const cur = strs[i].split('').sort().join('');

      if(!(cur in map)) {
          map[cur] = []
      }

      map[cur].push(strs[i])
  }

  return Object.values(map)
};