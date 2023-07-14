/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = Number.MIN_SAFE_INTEGER
  let tempSum = 0
  nums.forEach((n) => {
    tempSum += n
    maxSum = Math.max(maxSum, tempSum)
    if (tempSum < 0) {
      tempSum = 0
    }
  })
  return maxSum
}
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(nums))
