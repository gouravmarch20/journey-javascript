/**
 * @param {number[]} nums
 * @return {number}
 */
//? O(n)
var findPeakElement = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    //? mean -> arr[i-1] , arr[n+1] ==> -Infinity
    if (
      (i === 0 || nums[i] > nums[i - 1]) &&
      (i === n - 1 || nums[i] > nums[i +1 ])
    ) {
      return nums[i]
    }
  }
}
const nums = [1, 2, 3, 1]
console.log(findPeakElement(nums))
