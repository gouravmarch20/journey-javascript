/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const res = []
  let l = 0
  let r = nums.length - 1
  let i = r
  //!m1 : avoid equal to sign
  while (l <= r) {
    const rightVal = nums[r]
    const leftVal = nums[l]

    if (Math.abs(leftVal) < Math.abs(rightVal)) {
      res[i--] = rightVal * rightVal
      r--
    } else {
      // !m2 ==> not think how to asign answer
      //^ l1 : result assign  on right value => how
      // res[l] = leftVal * leftVal;
      res[i--] = leftVal * leftVal
      l++
    }
  }
  return res
}
const nums = [-7, -3, 2, 3, 11]
console.log(sortedSquares(nums))

const a = -9
console.log(Math.abs(a))
