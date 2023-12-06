/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {}
for (let i = 0; i < nums.length; i++) {
  if (obj.hasOwnProperty(nums[i])) {
    return [i, obj[nums[i]]]
  }
  obj[target - nums[i]] = i
}
};