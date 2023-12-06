/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false
  while (n >= 4) {
    n = n / 4
  }
  if (n === 1) {
    return true
  } else {
    return false
  }
}
console.log(isPowerOfFour(16));