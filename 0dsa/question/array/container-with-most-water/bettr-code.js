const containerWithMostWater = height => {
  let l = 0
  let r = height.length - 1
  let maxA = 0

  while (l < r) {
   maxA = Math.max(maxA, Math.min(height[r], height[l]) * (r - l))
    if (height[l] < height[r]) l += 1
    else if (height[r] < height[l]) r -= 1
    else {
      l += 1
      r -= 1
    }
  }
  return maxA
}
console.log(containerWithMostWater([2, 5, 7, 7]))
