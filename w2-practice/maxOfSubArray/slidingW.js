//TODO: FALING LOGIC HO ENSURE ==> else case 
var maxOfSubarray = function (arr, k) {
  let l = 0
  let r = 0
  let maxNo = arr[r]
  let res = []

  while (r < arr.length) {
    if (r - l < k) {
      // if(maxNo < arr[r])
      maxNo = Math.max(maxNo, arr[r])
      r++
    } else {
      res.push(maxNo)
      if(maxNo === arr[l]){

      }else{

      }
      l++

    }
  }
  console.log(res)
  // return maxSum
}
const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
const k = 3
console.log(maxOfSubarray(arr , k))
