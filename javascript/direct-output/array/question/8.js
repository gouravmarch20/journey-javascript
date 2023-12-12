// ? coustom flat
// https://www.youtube.com/watch?v=abbdJ4Yfm54&t=535s
let arr = [
  [1, 2],
  [3, 4, [8, 9]],
  [10, 14, 32]
]
function coustomFlat (arr, depth = 1) {
  let result = []
  arr.forEach(ar => {
    if (Array.isArray(ar) && depth > 0) {
        // TODO: DEEP DRIVE
      result.push(...coustomFlat(ar, depth - 1))
    } else {
      result.push(ar)
    }
  })
  return result
}
console.log(coustomFlat(arr));