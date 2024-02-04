function missingNumber(nums) {
  const n = nums.length
  let ans = 0
  const m = new Map()

  for (let i = 0; i <= n; i++) {
    m.set(i, 0)
  }

  for (let i = 0; i < n; i++) {
    m.set(nums[i], (m.get(nums[i]) || 0) + 1)
  }

  for (const [key, value] of m) {
    if (value === 0) {
      ans = key
    }
  }

  return ans
}
console.log(missingNumber([0, 1]))
