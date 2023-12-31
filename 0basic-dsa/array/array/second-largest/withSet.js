const arr = [1, 88, 88, 22, 55, -99, 101, 101]
const getSecondLargestElement = arr => {
  let maxNo = Infinity
  if (arr.length < 2) {
    return arr[1]
  }
  arr.sort((a, b) => a - b)
  maxNo = arr[arr.length - 1]
  console.log(maxNo)
  for (let i = arr.length - 1; i >= 0; i--) {
    if (maxNo !== arr[i]) {
      maxNo = arr[i]
      return maxNo
    }
  }
  return maxNo
}
console.log(getSecondLargestElement(arr))
