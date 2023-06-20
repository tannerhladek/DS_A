// const sumPossible = (amount, numbers, memo = {}) => {
//    // todo
//    if (amount in memo) return memo[amount]
//    if (amount < 0) return false
//    if (amount === 0) return true

//    for (let num of numbers) {
//       if (sumPossible(amount - num, numbers, memo) === true) {
//          memo[amount] = true
//          return true
//       }
//    }

//    memo[amount] = false
//    return false
// };

// round 2
const sumPossible = (amount, numbers, memo = {}) => {
   // todo
   if (amount in memo) return memo[amount]
   if (amount === 0) return true
   if (amount < 0) return false

   for (let num of numbers) {
      if (sumPossible(amount - num, numbers, memo)) {
         memo[amount] = true
         return true
      } else {
         memo[amount] = false
      }
   }

   return false
};




















module.exports = {
   sumPossible
};
