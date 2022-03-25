/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
   let l = 1
   let r = Math.max(...piles)
   let res = r

   while (l <= r) {
      let speed = Math.floor((l + r) / 2)
      if (consumeHours(piles, speed) <= h) {
         res = Math.min(res, speed)
         r = speed - 1
      } else {
         l = speed + 1
      }
   }

   return res
};


const consumeHours = (piles, speed) => {
   let time = 0
   for (let pile of piles) {
      time = time + Math.ceil(pile / speed)
   }

   return time
}
