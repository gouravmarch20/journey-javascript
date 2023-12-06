const tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  let dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = dp[2] = 1

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }

  return dp[n]
}
console.log(tribonacci(4));
