const fib = (n, cache = {}) => {
   // todo
   if (n in cache) return cache[n]
   if (n === 0 || n === 1) return n

   cache[n] = fib(n - 1, cache) + fib(n - 2, cache)

   return cache[n]
};


























module.exports = {
   fib
};
