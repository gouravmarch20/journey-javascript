const compose = (...fns) => {
  let result
  let len = fns.length
  return function (...args) {
    for (let index = len - 1; index >= 0; index--) {
      const fn = fns[index]
      result = index === len - 1 ? fn(...args) : fn(result)
    }
    return result
  }
}
const addFive = x => x + 5
const multiplyByFive = (x, y) => x * 5
const squareSelf = x => x * x
const multiplyAndAnd5 = compose(addFive, multiplyByFive, squareSelf)
console.log(multiplyAndAnd5(5));