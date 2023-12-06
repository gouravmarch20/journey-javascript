let multiply = function (x, y) {
  return function (z) {
    console.log(x * y * z)
  }
}
const multiplyByFive = multiply(3, 4)
multiplyByFive(5)