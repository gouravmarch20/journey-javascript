/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (const index in nums) {
    const pairIndex = target - nums[index]
    if (map.has(nums[index])) {
      return [index, map.get(nums[index])]
    }
    map.set(pairIndex, index)
  }
}
console.log(twoSum([2, 7, 11, 15], 9))
