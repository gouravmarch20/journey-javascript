const res = []
const flatArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {

      flatArr(arr[i])
    } else {
      res.push(arr[i])
    }
  }
  return res

}
const arr = [1, 2, [3, 4], [[5]], [[[6]]]]
console.log(flatArr(arr))
