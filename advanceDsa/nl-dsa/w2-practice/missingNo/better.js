/**
 * @param {number[]} nums
 * @return {number}
 */
//* O(n)

var missingNumber = function (nums) {
  let s = 0
  const n = nums.length
  for (const val of nums) {
    s += val
  }
  return  n*(n+1)/2 - s
}
console.log(missingNumber([0, 1]))
