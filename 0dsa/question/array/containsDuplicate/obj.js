const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6, 6, 5]
const arr3 = [4, 5, 6, 5]

const isContainsDuplicate = nums => {
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
console.log(isContainsDuplicate(arr1))
console.log(isContainsDuplicate(arr2))
console.log(isContainsDuplicate(arr3))
