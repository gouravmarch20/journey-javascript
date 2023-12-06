/**
 * @param {number} n
 * @return {number}
 */
const helper = (n, i, dp) => {
  if (n < i) {
    return 0
  }
  if (n === i) {
    return 1
  }
  if (dp[n] !== -1) {
    return dp[n]
  }
  const a = helper(n, i + 1, dp)
  const b = helper(n, i + 2, dp)
  //   !m1 : dp index
  dp[i] = a + b
  return a + b
}
var climbStairs = function (n) {
  const dp = new Array(n + 1).fill(-1)
  return helper(n, 0, dp)
}
console.log(climbStairs(3))
