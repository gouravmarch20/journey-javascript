const ab = nums => {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty([nums[i]])) {
      return true
    } else {
      obj[nums[i]] = 1
    }
  }

  return false
}
console.log(ab([1, 1]))
