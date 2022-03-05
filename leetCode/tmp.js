var firstMissingPositive = function (nums) {
   let min = 1;
   let tracker = new Set(nums);

   while (tracker.has(min)){
      min++
   }

   return min;
};
