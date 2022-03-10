/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

   const climbing = (steps, tracker = {}) => {
      if (steps in tracker) return tracker[steps]
      if (steps === n) return 1;
      if (steps > n) return 0;

      let res = climbing(steps + 1, tracker) + climbing(steps + 2, tracker);
      tracker[steps] = res;
      return res
   }

   return climbing(0);
};
