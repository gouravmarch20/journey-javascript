var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    console.log(nums)
    const result = []
    let l = 0
    let j = 0
    let r
    for (let l = 0; l < nums.length - 2; l++) {
      j = l + 1
      r = nums.length - 1
  
      if (nums[l] > 0) continue
      if (nums[l] === nums[l - 1]) continue
      // in between iteration
  
      while (j < r) {
        if (nums[l] + nums[j] + nums[r] === 0) {
          result.push([nums[l], nums[j], nums[r]])
          while (nums[j] === nums[j + 1]) j++
          while (nums[r] === nums[r - 1]) r--
          j++
          r--
        } else if (nums[l] + nums[j] + nums[r] > 0) {
          r--
        } else {
          j++
        }
      }
    }
    return result
  }