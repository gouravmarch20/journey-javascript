const arr = [ 10, 5, 2, 1, 13, 14, 22]
const targetValue = 12

const findClosestInArr = (targetValue) => {
   let closestDiff = targetValue - arr[0]
   let closestNum = arr[0]

   for (const i of arr) {
    const   tempClosestDiff = Math.abs(targetValue - i)
      if (closestDiff > tempClosestDiff) {
         closestDiff = tempClosestDiff
         closestNum = i
      }
   }
   return closestNum

}
console.log(findClosestInArr(targetValue));