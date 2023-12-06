function shortArrayAscending ([...array]) {
  return array.sort((a, b) => a - b)
}
const shortArrayDecending = ([...array]) =>
  array.sort((num1, num2) => num2 - num1)
console.log(shortArrayAscending([100, 83, 333, 32, 9, 45, 61]))
console.log(shortArrayDecending([100, 83, 333, 32, 9, 45, 61]))
