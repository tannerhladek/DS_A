/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//recursive
var uniquePaths = function (m, n, cache = {}) {
   const str = m.toString() + ',' + n.toString()
   if (str in cache) return cache[str]
   if (m < 1 || n < 1) return 0
   if (m === 1 && n === 1) return 1

   cache[str] = uniquePaths(m - 1, n, cache) + uniquePaths(m, n - 1, cache)

   return cache[str]
};
