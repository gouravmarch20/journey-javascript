// to calculate a power of number
// m1 : result =1 case forgot
function power (base, exponent) {
  let result = 1
  for (let index = 0; index < exponent; index++) {
    result = result * base
  }
  return result
}

const output = power(3, 6)
console.log(output)
