/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  console.log(nums[n - 1], nums[n - 2], nums[0], nums[1])
  return nums[n - 1] * nums[n - 2] - nums[0] * nums[1]
}
const nums = [4, 2, 5, 9, 7, 4, 8]
console.log(maxProductDifference(nums))
