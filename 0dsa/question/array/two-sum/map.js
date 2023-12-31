/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [i, map.get(nums[i])]
    }
    map.set(target - nums[i], i)
  }
}
console.log(twoSum([3, 2, 3], 6))
