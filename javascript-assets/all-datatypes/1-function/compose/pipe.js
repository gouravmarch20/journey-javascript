const pipe = (...fns) => {
  let result
  let len = fns.length
  return function (...args) {
    for (let index = 0; index <= len - 1; index++) {
      const fn = fns[index]
      result = index === 0 ? fn(...args) : fn(result)
    }
    return result
  }
}
const addFive = x => x + 5
const multiplyByFive = (x, y) => x * 5
const squareSelf = x => x * x

console.log(pipe(addFive, multiplyByFive, squareSelf)(5))
