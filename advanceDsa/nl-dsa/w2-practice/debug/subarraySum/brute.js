/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//TODO: https://www.youtube.com/watch?v=xvNwoz-ufXA

var subarraySum = function (nums, k) {
  let c = 0

  for (let i = 0; i < nums.length; i++) {
    let s = 0
    for (let j = i; j < nums.length; j++) {
      s += nums[j]
      if (s === k) {
        c++
      }

    }
  }
  return c
}
// const nums = [1, 2, 3]
const nums = [1, -1, 0]

const k = 0
console.log(subarraySum(nums, k))
