//* O(n^2)
//&  O(n)
const findCommonInArr = (arr1, arr2) => {
  const ans = []

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.find((item) => item === arr1[i])) {
      ans.push(arr1[i])
    }
  }
  return ans
}
const findCommon = (obj1, obj2) => {
  const ans = {}
  const arr1 = Object.keys(obj1)
  const arr2 = Object.keys(obj2)

  const commonKey = findCommonInArr(arr1, arr2)
  for (const val of commonKey) {
    if (obj1[val] === obj2[val]) {
      ans[val] = obj1[val]
    }
  }
  return ans
}
const obj1 = { a: 1, b: 3, c: 5 }
const obj2 = { b: 3, c: 100 }

console.log(findCommon(obj1, obj2))
