let arr = [
  [1, 2],
  [3, 4, [8, 9]],
  [10, 14, 32]
]
console.log(arr.flat())
console.log([].concat(...arr))
