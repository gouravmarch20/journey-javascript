// *O(n^2)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let c = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        c++
      }
    }
    res.push(c)
  }
  return res
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
