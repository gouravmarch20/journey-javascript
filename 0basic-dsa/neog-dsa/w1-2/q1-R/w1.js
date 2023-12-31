// answer has been rounded to 2 decimal places using toFixed()
const getHexagonArea = sideLength =>
  (((3 * Math.sqrt(3)) / 2) * Math.pow(sideLength, 2)).toFixed(2)

console.log(getHexagonArea(10))
