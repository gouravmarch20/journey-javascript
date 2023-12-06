function secondSmallest(nums) {
  // Your code goes here
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

secondSmallest([1, 2, 1, 4, 6])
