const binarySearch = (numbers, target) => {
   // todo
   let l = 0
   let r = numbers.length - 1

   while (l <= r) {
      let mid = Math.floor((r + l) / 2)
      if (numbers[mid] === target) return mid
      else if (numbers[mid] < target) l = mid + 1
      else r = mid - 1
   }

   return -1
};










module.exports = {
   binarySearch
};
