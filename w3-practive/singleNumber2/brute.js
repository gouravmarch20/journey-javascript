const getSetBit = (n) => {
  // function body
  let c = 0

  while (n !== 0) {
    if (n & 1) {
      c++
    }
    n = n >> 1
  }

  return c
}
var singleNumber = function (nums) {
  let myMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    getSetBit(nums[i])
  }
}
const nums = [2, 2, 3, 2]
console.log(singleNumber(nums))
