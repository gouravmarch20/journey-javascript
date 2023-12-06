/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let totalM = 0
  while (n != 1) {
    if (n & 1) {
      totalM += Math.floor(n / 2) + 1
    } else {
      totalM += Math.floor(n / 2)
    }

    n = Math.floor(n/2)
  }
  return totalM
}

numberOfMatches(14)
