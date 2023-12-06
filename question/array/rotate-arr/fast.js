const arr = [3, 4, 5, 6, 7, 8]
const rotateArray = (arr, noOfShift) => {
   const maxRotation = noOfShift % arr.length
   const toAdd = arr.splice(maxRotation, noOfShift)
   arr.unshift(...toAdd)
   return arr

}
console.log(rotateArray([...arr], 2));
console.log(rotateArray([...arr], 18));

//! Time Complexity : O(n)  + O(n) ==> O(n)