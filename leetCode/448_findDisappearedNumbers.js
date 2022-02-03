var findDisappearedNumbers = function (nums) {
   const numSet = new Set(nums);
   const result = [];

   for (let i = 1; i <= nums.length; i++) {
      if (numSet.has(i)) continue
      else result.push(i)
   };

   return result
};
