//print subarray
function subarraySum(nums, k) {
  let n = nums.length
  let c = 0
  let prevSum = {}
  let s = 0
  for (let i = 0; i < n; i++) {
    s += nums[i]
    if (s == k) {
      c++
    }
    prevSum[s] = prevSum[s] ? prevSum[s] + 1 : 1
    if (prevSum.hasOwnProperty(s)) c++
  }
  return c
}

// Test the function with [1, 2, 3]
let nums = [1, 2, 3]
console.log(subarraySum(nums, 2))
