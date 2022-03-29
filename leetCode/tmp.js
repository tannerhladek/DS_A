const numberOfTimes = (string, start, end) => {
   if (!string) return []

   let tracker = {}
   let left = 0

   let firstComp = false
   let count = 0

   // generate compartment tracker
   for (let i = 0; i < string.length; i++) {
      // encountering first pipe (compartment)
      if (string[i] === '|' && !firstComp) {
         firstComp = true
         left = i
         count = 0
         continue
      }

      if (string[i] === '|' && firstComp) {
         tracker[i] = count
         left = i
      } else if (firstComp && string[i] === '*') {
         count++
      }
   }


   let
}


console.log(numberOfTimes('|**|**|*'));
