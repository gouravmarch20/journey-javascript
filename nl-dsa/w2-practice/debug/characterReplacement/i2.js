/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let n = s.length
  let maxF = 0
  let freq = new Map()
  let windL = 0
  for (let i = 0; i < n; i++) {
    const c = s[i]
    // freq.set(s[i], freq.get(s[i]) || 1)//!m1
    // freq.set(s[i], freq.get(c || 0) + 1 )//! m2 
    freq.set(s[i] , (freq.get(s[i]) || 0) + 1)
    console.log(freq);
    maxF = Math.max(maxF, freq.get(s[i]))
    if (windL - maxF < k) {
      windL++
    } else {
        // console.log(i);

    //   const oldChar = freq.get(s[i - windL])//!
      const oldChar = s[i - windL]
    //   console.log(oldChar);

    //   freq.set(s[oldChar], freq.get(s[oldChar]) - 1)
    //   freq.set(oldChar,( freq.get(oldChar) - 1))//! missing braket
      freq.set(oldChar,( freq.get(oldChar) - 1))
    }
  }
  return windL
}
let s = "AABABBA"
let k = 1
console.log(characterReplacement(s, k))
