const arr = [1, 88, 88, 22, 55, -99, 101, 101]
const getSecondLargestElement = (arr) => {
   const uniqueArr = [...new Set(arr)]//? O(n)
    
   if (uniqueArr.length >= 2) {
      return uniqueArr[1]
   }
   uniqueArr.sort((a, b) => a - b)//? O(nlogn)
   return uniqueArr.at(-2)

}
console.log(getSecondLargestElement(arr));

//! TODO: O(nlogn)