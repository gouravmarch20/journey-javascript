var numIdenticalPairs = function (nums) {
  let c = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        c++
      }
    }
  }
  return c
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
