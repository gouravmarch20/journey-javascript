const arr = [-2, -1, -3, -4]
const maxSubarray = nums => {
  let maxSum = nums[0]
  let tempSum = 0
  nums.forEach(n => {
    tempSum += n
    maxSum = Math.max(maxSum, tempSum)
    if (tempSum < 0) {
      tempSum = 0
    }
  })
  return maxSum
}
console.log(maxSubarray(arr))
