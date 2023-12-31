/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let s = 0
  let e = nums.length - 1
  let m = Math.floor((s + e) / 2)
  let c = 0
  while (s <= e) {
    if (nums[m] === target) {
      return m
    } else if (nums[m] > target) {
      e = m - 1
    } else {
      s = m + 1
    }
    c++
    // ! m1 : not use () in s+e
    // m = Math.floor(s + e / 2)
    m = Math.floor((s + e) / 2)
  }
  return -1
}
const nums = [-1, 0, 3, 5, 9, 12]
const target = 9
console.log(search(nums, target))
