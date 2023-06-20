// const fib = (n, cache = {}) => {
//    // todo
//    if (n in cache) return cache[n]
//    if (n === 0 || n === 1) return n

//    cache[n] = fib(n - 1, cache) + fib(n - 2, cache)

//    return cache[n]
// };

// round 2
const fib = (n, memo = {}) => {
   // todo
   if (n in memo) return memo[n]
   if (n <= 0) return 0
   if (n === 1) return 1

   memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
   return memo[n]
};


























module.exports = {
   fib
};
