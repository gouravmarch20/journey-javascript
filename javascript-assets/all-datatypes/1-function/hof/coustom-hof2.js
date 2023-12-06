// ** calculator : HOF
// ** sum / mul : is CB

const sum = (previous, current) => previous + current
const mul = (previous, current) => {
  if (previous == 0) {
    previous = 1
    return (previous * current)
  }
 return ( previous * current)
}

const calculator = (operator, arr) => {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result = operator(result, arr[i])
    console.log(result);
  }
  return result
}
// const sumResult = calculator(sum, [3, 4, 5])
const mulResult = calculator(mul, [3, 4, 5])
// console.log(sumResult)
console.log(mulResult)
