const arr = [5, 7, 11, 13]
const firstMissingOddSortedArr = arr => {
  let n = Math.floor(arr[0] / 2)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2 * n + 1) {
      n++
    } else {
      return 2 * n + 1
    }
  }
}
console.log(firstMissingOddSortedArr(arr))
