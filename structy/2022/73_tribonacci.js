// const tribonacci = (n, cache = {}) => {
//    // todo
//    if (n in cache) return cache[n]
//    if (n === 0 || n === 1) return 0
//    if (n === 2) return 1

//    cache[n] = tribonacci(n - 1, cache) + tribonacci(n - 2, cache) + tribonacci(n - 3, cache)

//    return cache[n]
// };

// round 2
const tribonacci = (n, memo = {}) => {
   // todo
   if (n in memo) return memo[n]
   if (n === 0 || n === 1) return 0
   if (n === 2) return 1

   memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3)
   return memo[n]
};


























module.exports = {
   tribonacci
}
