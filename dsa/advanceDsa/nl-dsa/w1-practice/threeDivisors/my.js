/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let c = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      c++
    }
  }
  return c === 3 ? true : false
}
console.log(isThree(4))
