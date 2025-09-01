// curring  , closure edge

// with arrow function
const getSumWithArrowFun = num1 => num2 => num3 => num4 => num5 =>
  num1 + num2 + num3 + num4 + num5
console.log(getSumWithArrowFun(5)(4)(3)(2)(1))

// ? without arrow function
function getSumWithoutArrow (num1) {
  return function (num2) {
    return function (num3) {
      return function (num4) {
        return function (num5) {
          return num1 + num2 + num3 + num4 + num5
        }
      }
    }
  }
}
console.log(getSumWithoutArrow(5)(4)(3)(2)(1))
