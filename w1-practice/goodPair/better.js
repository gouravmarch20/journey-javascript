function numIdenticalPairs(nums) {
  let c = 0
  let i = 0
  let j = i + 1
    nums.sort()
  while (i < nums.length) {
    if (nums[i] === nums[j]) {
      c++
      j++
    } else {
      ++i
      j = i + 1
      if (nums[j] === undefined) {
        return c
      }
    }
  }

//   return c
}
console.log(numIdenticalPairs([1, 1, 3, 1, 1, 3]))
