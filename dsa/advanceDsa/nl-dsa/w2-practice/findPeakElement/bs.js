/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let e = nums.length - 1
  let s = 0
  if (nums[0] > nums[1]) return 0
  if (nums[nums.length - 1] > nums[nums.length - 1]) return nums.length - 1
  while (s <= e) {
    let m = Math.floor((s + e) / 2)
    if (nums[m] > nums[m + 1] && nums[m] > nums[m - 1]) {
      return m
    } else if (nums[m] > nums[m + 1]) {
      e = m - 1
    } else if (nums[m] > nums[m - 1]) {
      s = m + 1
    } else {
      s = m + 1
    }
  }
}
const nums = [1, 2, 3, 1]
console.log(findPeakElement(nums))
