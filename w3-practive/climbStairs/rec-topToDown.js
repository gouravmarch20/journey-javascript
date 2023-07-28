/**
 * @param {number} n
 * @return {number}
 */
const helper = (n , dp)=>{
    if(n === 0 || n === 1 ){
      return 1
  }

  if(n === 2){
      return 2
  }
  if(dp[n] !== -1){
      return dp[n]
  }
  const a = helper(n -1 , dp) 
  const b = helper(n-2 , dp)
    dp[n] = a + b;


  return( a + b)
}
var climbStairs = function(n ) {
const dp = new Array(n+1).fill(-1)
return helper(n , dp)
};