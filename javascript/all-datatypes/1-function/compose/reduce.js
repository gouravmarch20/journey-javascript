const compose = (...fns) => x => fns.reduceRight((result, fn) => fn(result), x)

const addFive = x => x + 5
const multiplyByFive = (x, y) => x * 5
const squareSelf = x => x * x

console.log(compose(addFive, multiplyByFive, squareSelf)(5))
