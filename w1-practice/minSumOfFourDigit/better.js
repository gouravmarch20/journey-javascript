/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function (num) {
  const tempArr = []
  while (num != 0) {
    const dig = num % 10
    tempArr.push(dig)
    num = Math.floor(num / 10)
  }
  tempArr.sort()
  console.log(tempArr)
  const no1 = tempArr[0] * 10+ tempArr[3]
  const no2 = tempArr[1] * 10 + tempArr[2]
  console.log(no1 , no2)

  return no1 + no2
}
console.log(minimumSum(2932))
