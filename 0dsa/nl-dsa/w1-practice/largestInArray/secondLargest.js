function findSecondLargest(nums) {
  if (nums.length < 2) {
    throw new Error("Array must have at least two numbers.")
  }

  let max = -Infinity
  let secondMax = -Infinity

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max
      max = nums[i]
    } else if (nums[i] < max && nums[i] > secondMax) {
      secondMax = nums[i]
    }
  }

  if (secondMax === -Infinity) {
    throw new Error("No second largest number found.")
  }

  return secondMax
}
