const reverseNum = number => {
  let num = number.toString()
  let reverseNum = ''
  for (let i = 0; num > 9; i++) {
    digit = num % 10
    reverseNum += String(digit)
    num -= digit
    num = num / 10
  }
  return Number(reverseNum += num)
}
console.log(reverseNum(362))
