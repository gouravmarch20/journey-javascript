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
    // freq.set(s[i], ((freq.get(s[i]) || 0) + 1))
    freq.set(s[i] , (freq.get(s[i]) || 0) + 1)

    // maxF = Math.max(maxF, freq.get(s[i]) || 0)
    maxF = Math.max(maxF, freq.get(s[i]))

    if (windL - maxF < k) {
      windL++
    } else {
      const oldChar = s[i - windL]
      // freq.set(oldChar, (freq.get(oldChar) - 1))
      freq.set(oldChar,( freq.get(oldChar) - 1))
    }
  }
  return windL
}

let s = "AABABBA"
let k = 1
console.log(characterReplacement(s, k))
