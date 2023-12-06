/**
 * @param {number[]} nums
 * @return {number[]}
 */
//* O(n)
//& O(n)
var runningSum = function (nums) {
  const n = nums.length
  let s = 0
  let res = []
  for (let i = 0; i < n; i++) {
    s += nums[i]
    res.push(s)
  }
  return res
}
// const nums = [1,2,3,4]
// [0,63,-23,60,-27,-73,-53,-5,63,68,-85,-82,-1,-11,96,19,33,-72,-93,-44,-65,-60,17,95,-98,-43,-67]


const nums = [0,63,-23,60,-27,-73,-53]

console.log(runningSum(nums));