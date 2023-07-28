/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let positiveBase = Math.abs(n)
  let ans = 1

  while (positiveBase  >= 1) {
    if (positiveBase & 1) {
      //^ saving extra x in odd case 
      ans *= x
    }
    //^ odd or even -> double it
    x *= x
    positiveBase = Math.floor(positiveBase / 2)
  }
  if (n > 0) {
    return ans
  } else {
    return 1 / ans
  }
}
console.log(myPow(2, 1))
