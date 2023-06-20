const minChange = (amount, coins) => {
   const res = _minChange(amount, coins)
   if (res === Infinity) return -1
   return res
}

const _minChange = (amount, coins, memo = {}) => {
   // todo
   if (amount in memo) return memo[amount]
   if (amount === 0) return 0
   if (amount < 0) return Infinity

   let min = Infinity
   for (let coin of coins) {
      const numCoins = 1 + _minChange(amount - coin, coins, memo)
      min = Math.min(min, numCoins)
   }

   memo[amount] = min
   return min
};


























module.exports = {
   minChange
};
