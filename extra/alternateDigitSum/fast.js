/**
 * @param {number} n
 * @return {number}
 */
//* O(n)
//& O(1)
var alternateDigitSum = function (n) {
  //! m1 : number can become >> array by spread operator/split only , string can
  //! m2 : string mai direct doing ==> add , subtract
   n = n.toString()

  let ans = 0
  for (let i = 0; i < n.length; i++) {
    if (i & 1) {
      ans -= Number(n[i])
    } else {
      ans += Number(n[i])
    }
  }
  return ans
}
n = 123
console.log(alternateDigitSum(n))
