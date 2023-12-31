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
    if (myMap.get(nums[i])) {
      myMap.set(nums[i], myMap.get(nums[i]) + 1)
    } else {
      myMap.set(nums[i], 1)
    }
  }
  console.log(myMap)
  for (const [key, value] of myMap.entries()) {
    if (value === 1) {
      return key
    }
  }
  return -1
}
const nums = [2, 2, 3, 2]
console.log(singleNumber(nums))
