/**
 * @param {number[]} cost
 * @return {number}
 */
let dp = []
const helper = (cost, n) => {
  if (dp[n] !== -1) return dp[n]
  if (n <= 1) return (dp[n] = 0)
  if (n === 2) return (dp[n] = Math.min(cost[0], cost[1]))
  //
  return (dp[n] = Math.min(
    helper(cost, n - 1) + cost[n -1],
    helper(cost, n - 2) + cost[n - 2]
  ))
}
var minCostClimbingStairs = function (cost) {
  let n = cost.length

  dp = new Array(n + 1).fill(-1)
  return helper(cost, n)
}
const cost = [10, 15, 20]
console.log(minCostClimbingStairs(cost))
