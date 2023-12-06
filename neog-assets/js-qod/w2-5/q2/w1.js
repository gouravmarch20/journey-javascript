const sumOfDigit = number => {
  let sum = 0
  for (; number > 9; ) {
    let tempDigit = number % 10
    sum += tempDigit
    number = Math.floor(number / 10)
  }
  console.log(sum + number)
}
sumOfDigit(1234)
