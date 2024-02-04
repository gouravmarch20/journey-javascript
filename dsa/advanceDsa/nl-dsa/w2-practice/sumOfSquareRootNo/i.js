/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let a = 0
  let b = Math.floor(Math.sqrt(c))
  console.log(b)
//   while (a <= b)
//     if (Math.pow(b, 2) + Math.pow(a, 2) === c) {
//       return true
//     } else if (Math.pow(b, 2) + Math.pow(a, 2) > c) {
//       b--
//     } else {
//       a++
//     }
  return false
}
console.log(judgeSquareSum(9))