function mySqrt(x) {
    let s = 0;
    let e = x;
    let m = 0;
    let ans = -1;
    while (s <= e) {
      m = Math.floor((s + e) / 2);
      let sq = m * m;
      if (sq === x) {
        return m;
      } else if (x > sq) {
        ans = m;
        s = m + 1;
      } else {
        e = m - 1;
      }
    }
    return ans;
  }
  console.log(mySqrt(9))