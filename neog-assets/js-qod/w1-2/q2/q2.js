const getElementIndex = (arr, key) => {
  for (let i = 0; arr[i] !== undefined; i++) {
    if (arr[i] === key) {
      return i
    }
  }
  return -1
}
console.log(getElementIndex([1, 6, 3, 5, 8, 9], 2))
console.log(getElementIndex([1, 6, 3, 5, 8, 9], 5))
