/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function (num) {
  const arr = num
    .toString()
    .split("")
    .sort((a, b) => b - a)
  const no1 = []
  const no2 = []
 
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || i == 2) {
      no1.unshift(arr[i])
    }
    if (i == 1 || i == 3) {
      no2.unshift(arr[i])
    }
  }
  return Number(no1.join("")) + Number(no2.join(""))
}
console.log(minimumSum(2932))
