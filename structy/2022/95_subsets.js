const subsets = (elements) => {
   // todo
   if (!elements.length) return [[]]

   const first = elements[0]
   const subsetsWithoutFirst = subsets(elements.slice(1))

   const subsetsWithFirst = []
   for (let sub of subsetsWithoutFirst) {
      subsetsWithFirst.push([first, ...sub])
   }

   return [...subsetsWithoutFirst, ...subsetsWithFirst]
};




























module.exports = {
   subsets
};

