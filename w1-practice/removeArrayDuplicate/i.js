/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0
    let c = 0
  
    while (i < nums.length) {
      while (nums[i] == nums[i + 1]) {
        i++
      }
      ;[nums[i], nums[c]] = [nums[c], nums[i]]
      // swap(nums[i], nums[c])
      c++
  
      i++
    }
  //   console.log(nums)
    return c
  }
  console.log(removeDuplicates([0, 0, 1, 1]))
  