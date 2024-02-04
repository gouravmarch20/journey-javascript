class Solution {
  /**
   * @param {number} c
   * @return {boolean}
   */
  judgeSquareSum(c) {
    // Your code goes here
    let b = Math.floor(Math.sqrt(c))
    let a = 0
    while (a <= b) {
      if (a * a + b * b === c) {
        return true
      } else if (a * a + b * b > c) {
        b--
      } else {
        a++
      }
    }
    return false
  }
}
