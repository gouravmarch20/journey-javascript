//* O(n^2)
/**
 * @param {number} n
 * @return {number[]}
 */
const getSetBit = (n) => {
  // function body
  let c = 0

  while (n !== 0) {
    if (n & 1) {
      c++
    }
    n = n >> 1
  }

  return c
}
var countBits = function (n) {
  const res = []
  for (let i = 0; i <= n; i++) {
    res.push(getSetBit(i))
  }

  return res
}
countBits(4)
