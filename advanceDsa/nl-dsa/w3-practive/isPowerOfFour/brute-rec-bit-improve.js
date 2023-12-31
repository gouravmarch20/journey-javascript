/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 1) {
    return true
  }
 
  //? n %  4 === 0 => power is alway div by its base
  return n % 4 == 0 && isPowerOfFour(n / 4)
}
console.log(isPowerOfFour(16))
