const squareOf = side => side * side
//! TODO:DEEP DRIVE OPERATOR PRECIDE , AUTO TYPE CASE OF tofixed
function areaofHexagon (side) {
  const square = squareOf(side)
  return ((3 * Math.sqrt(3)) / 2) * square.toFixed(2)
}

console.log( areaofHexagon(10))
// function areaOfHexagon (side) {
//   return (3 * Number(Math.sqrt(3).toFixed(2)) * Math.pow(side, 2)) / 2
// }
// console.log(areaOfHexagon(10))
