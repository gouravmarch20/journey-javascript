/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  //!m1 : negative number is power , in case of negative power we do divide
  //!m2 : x ko x * x --> returning answer but fail if power is 0
  //   let positiveBase = n
  if(n === 0) return 1;

  let positiveBase = Math.abs(n)
  let oddPending = 1
  //^ 1 time loop running extra --> n/2 1st behind so while mai put

  while (positiveBase / 2 >= 1) {
    if (positiveBase & 1) {
      oddPending *= x
      x = x * x
    } else {
      x = x * x
    }
    positiveBase = Math.floor(positiveBase / 2)
  }
  if (n > 0) {
    return x * oddPending
  } else {
    return 1 / (x * oddPending)
  }
}
console.log(myPow(0.44528, 0))
