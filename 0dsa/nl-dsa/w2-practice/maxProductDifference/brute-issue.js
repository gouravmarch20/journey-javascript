/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  //   let m1 = Number.MIN_SAFE_INTEGER
  //   let m2 = Number.MIN_SAFE_INTEGER //max second most
  //   let mi1 = Number.MAX_SAFE_INTEGER
  //   let mi2 = Number.MAX_SAFE_INTEGER //min second least
  let m1 = nums[i]
  let m2 = nums[i]
  let mi1 = nums[i]
  let mi2 = nums[i]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > m1) {
      m2 = m1
      m1 = nums[i]
    } else if (m2 > nums[i]) {
      m2 = nums[i]
    } else if (mi1 > nums[i]) {
      mi2 = mi1
      mi1 = nums[i]
    }
  }

  // return nums[n - 1] * nums[n - 2] - nums[0] * nums[1]
}
const nums = [4, 2, 5, 9, 7, 4, 8]
console.log(maxProductDifference(nums))
