const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6, 6, 5]
const arr3 = [4, 5, 6, 5]

const isContainsDuplicate = nums => {
  const set = new Set(nums)
  return set.size !== nums.length
}
console.log(isContainsDuplicate(arr1))
console.log(isContainsDuplicate(arr2))
console.log(isContainsDuplicate(arr3))
