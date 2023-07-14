// TODO: https://www.youtube.com/watch?v=eD95WRfh81c


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          while (nums[k] === nums[k + 1]) k++
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            res.push([nums[i], nums[j], nums[k], nums[l]])
            while (nums[l] === nums[l + 1]) l++
          }
        }
      }
    }
  }
  return res
}

// const nums = [1, 0, -1, 0, -2, 2]
const nums = [2, 2, 2, 2, 2]
const target = 8
console.log(fourSum(nums, target))
