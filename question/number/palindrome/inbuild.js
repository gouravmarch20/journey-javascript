const num = 0

const isPalindromeNum = num => {
  return num >= 0 && num === Number(num.toString().split('').reverse().join(''))
}
console.log(isPalindromeNum(num))
