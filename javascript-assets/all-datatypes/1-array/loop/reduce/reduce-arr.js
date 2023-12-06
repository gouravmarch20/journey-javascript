// good syntax
const arr = [1, 2, 3, 4, 5]
let initalValue = 0
const total = arr.reduce((acc, curr, index) => {
  console.log(acc, curr, index)
  return acc + curr
}, initalValue)
console.log('-----> final output --- ', total)
