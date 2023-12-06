const arr = [1, 8, 19, -7, 2]
const findMax = (arr) => {
   let maxNo = arr[0]
   for (const i of arr) {
      if (i && i > maxNo) {
         maxNo = i
      }

   }
   return maxNo
}
console.log(findMax(arr))