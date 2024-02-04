const arr = [1, 4, 484, 5, 6]
const average = arr.reduce((a, c, i) => {
  total = a = a + c
  if (i === arr.length - 1) {
    return total / arr.length
  }
  return a
}, 0)
console.log(average)
console.log(typeof average)
