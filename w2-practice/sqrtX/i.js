class Solution {
  /**
   * @param {number} x
   * @return {number}
   */
  bSearch(num) {
    let s = 0
    let e = num
    let m = 0
    let ans = -1
    while (s <= e) {
      m = Math.floor((s + e) / 2)
      let sq = m * m
      if (sq === num) {
        return m
      } else if (num > sq) {
        ans = m
        s = m + 1
      } else {
        e = m - 1
      }
    }
    return ans
  }
  mySqrt(x) {
    // Your code goes here
    const r = this.bSearch(x)

    return r
  }
}
