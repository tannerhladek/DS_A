/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

   const climbing = (n, tracker = {}) => {
      if (n in tracker) return tracker[n]
      if (n === 0) return 1;
      if (n < 0) return 0;

      let res = climbing(n - 1, tracker) + climbing(n - 2, tracker);
      tracker[n] = res;
      return res
   }

   return climbing(n);
};
