const sumOfDigit = numString => {
  let sum = 0
  for (const num of numString) {
    sum += num //! debug TODO:
  }
  console.log(sum);
//   return sum
}
console.log(typeof sumOfDigit('1234'))
