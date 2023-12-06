const arr1 = [1, 3]
const arr2 = [4, 5, 6, 6, 5]
const arr3 = [4, 5, 6, 5]

const isContainsDuplicate = nums => {
  const map = new Map()

  for (const i of nums) {
    if (map.has(i)) {
      return true
    } else {
      map.set(i, true)
    }
  }
  return false
}
console.log(isContainsDuplicate(arr1))
console.log(isContainsDuplicate(arr2))
console.log(isContainsDuplicate(arr3))
