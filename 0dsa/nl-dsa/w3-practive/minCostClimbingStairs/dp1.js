/**
 * @param {number[]} cost
 * @return {number}
 */
let dp = []
const helperMinCost = (i, n, cost) => {
  if (i >= n) return 0
  if (dp[i] !== -1) return dp[i]
  //rec tell cost form i+1  
  const op1 = helperMinCost(i + 1, n, cost)//op1: min cost to reach top from i+1
    //rec tell cost form i+2
  const op2 = helperMinCost(i + 2, n, cost)//op2 : min cost to reach top from i+2
  //return  min cost form current position to reach top
  dp[i] = Math.min(op1, op2) + cost[i]
  return dp[i]
}
var minCostClimbingStairs = function (cost) {
  let n = cost.length
  dp = new Array(n + 1).fill(-1)
  return Math.min(helperMinCost(0, n, cost, dp), helperMinCost(1, n, cost, dp))
}
const cost = [1, 20 , 2 , 4 , 100]
console.log(minCostClimbingStairs(cost))
