/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let l = 0
  let r = 0
  let sum = 0
  let c = 0

  while (r <= arr.length) {
    if (r - l < k) {
      sum += arr[r]
      r++
    } else {
      // ! m1 : use opposite sign less than
      if (sum / k >= threshold) {
        c++
      }
      sum -= arr[l]
      l++
    }
  }

  return c
}
const arr = [2, 2, 2, 2, 5, 5, 5, 8]
const k = 3
const threshold = 4
console.log(numOfSubarrays(arr, k, threshold))
