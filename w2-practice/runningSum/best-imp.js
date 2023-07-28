/**
 * @param {number[]} nums
 * @return {number[]}
 */
//* O(n)
//& O(1)
var runningSum = function (nums) {
    const n = nums.length
    for (let i = 1; i < n; i++) {
     
      nums[i] = nums[i] + nums[i-1]
    }
    return nums
  }
  const nums = [1, 2, 3, 4]
  
  
  console.log(runningSum(nums))
  