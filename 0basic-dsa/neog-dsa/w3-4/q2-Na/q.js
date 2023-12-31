// function breakAnArrayIntoChunks(arr, numberOfChunks) {
//     if(numberOfChunks < 0 || numberOfChunks > arr.length)
//                   return `Invalid number of chunks`;
//     let count = 0;
//     let newArr = []; // numberofChunks
//     let finalArr = [];

//     for (let i = 0; i < arr.length; i++) {
//       count++;
//       newArr.push(arr[i]);

//       if (count === numberOfChunks) {
//         count = 0;
//         finalArr.push(newArr);
//         newArr = [];
//       }
//     }
//     newArr.length > 0 && finalArr.push(newArr);
//     return finalArr;
//   }
//   console.log(breakAnArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 7))

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chunkSize = 3
let newArr = []
for (let i = 0; i < array.length; i += chunkSize) {
  const chunk = array.slice(i, i + chunkSize)

  newArr.push(chunk)
}
console.log(newArr)
