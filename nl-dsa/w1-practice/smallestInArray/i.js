function secondSmallest(nums) {
  let min = Infinity
  let sMin = Infinity

  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      sMin = min
      min = nums[i]
    } else if (min < nums[i] && sMin > nums[i]) {
      sMin = nums[i]
    }
  }
  return sMin
}

console.log(secondSmallest([-2, -3, -1, 1])) // Output: 2
