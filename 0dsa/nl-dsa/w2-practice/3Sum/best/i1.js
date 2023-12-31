var threeSum = function (nums) {
  let res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    // !m1 --> nums[i + 1] --> wrote
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (nums[j] === nums[j - 1]) {
          j++
        }
        while (nums[k] === nums[k + 1]) {
          k--
        }
      } else if (sum < 0) {
        j++
      } else {
        k--
      }
    }
  }
  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum(  [0,0,0]))

//[[-1,-1,2],[-1,0,1]]
