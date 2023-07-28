/**
 * @param {number} n
 * @return {number[]}
 */

//DOUBT HOW WORKING IN NEGATIVE NEGATIVE VALUE
var isPowerOfThree = function (n) {
//    n = Math.abs(n)
  while (n >= 3) {
    n = Math.floor(n / 3)
  }
  if (n === 1) {
    return true
  } else {
    return false
  }
}
console.log(isPowerOfThree(-27))
console.log(isPowerOfThree(27))
