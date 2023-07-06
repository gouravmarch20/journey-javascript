/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const leftSum = (startIndex, [...nums]) => {
  return nums.slice(0, startIndex).reduce((acc, curr) => acc + curr, 0)
}

var pivotIndex = function (n) {
  let s = 1 //^ 1 sai start  ==> formula creation
  let e = n // ^ e same as n ==> formula creation
  let totalSum = (n * (n + 1)) / 2 //? formula creation

  while (s <= e) {
    let m = Math.floor((s + e) / 2)
    let leftSum = (m * (m + 1)) / 2
    let rightSum = totalSum - leftSum + m

    if (leftSum === rightSum) {
      return m
    } else if (leftSum < rightSum) {
      s = m + 1
    } else {
      e = m - 1
    }
  }
  return -1
}
console.log(pivotIndex(8))

//Input: n =
// Output: 6
//* Explain: 8 means 1 to 8 items in array
//& 6 is the pivot integer : 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
