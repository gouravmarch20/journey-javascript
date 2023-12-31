/**
 * @param {number[]} nums
 * @return {number[]}
 */
//* O(n)
//& O(1)
var runningSum = function (nums) {
  const n = nums.length
  let res = []
  for (let i = 0; i < n; i++) {
    //!m1-> nums[i - 1] || nums[i]  if value is zero it means false  => so i == 0 mai
    // nums[i] = nums[i] + (( nums[i - 1] ) ?( nums[i - 1] : 0))
    
    // nums[i] = nums[i] + (( nums[i - 1] ??  0))

    nums[i] = nums[i] + ((i === 0) ?( 0) :( nums[i - 1]))
  }
  return nums
}
const nums = [1, 2, 3, 4]


console.log(runningSum(nums))
