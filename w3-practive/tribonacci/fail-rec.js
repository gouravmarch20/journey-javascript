/**
 * @param {number} n
 * @return {number}
 */
const helper = (n , dp) => {
    if(n === 0 ) return n
    if(n === 1 || n === 2  ) return 1
    if(dp[n] !== -1 ) return dp[n];
    dp[n] = ( tribonacci(n-1 , dp) + tribonacci(n-2, dp) + tribonacci(n-3 , dp))
    return dp[n]


}

var tribonacci = function(n) {
 let dp = new Array(n+1).fill(-1)
 return helper(n , dp)
};