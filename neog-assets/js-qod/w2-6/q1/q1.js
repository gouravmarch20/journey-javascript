const squareArea = side => side * side
const squarePerimeter = side => 4 * side
const squareSurfaceArea = side => 6 * side * side
const squareVolume = side => side * side * side
const calculate = side => {
  console.log('squareArea', squareArea(side))
  console.log('squarePerimeter', squarePerimeter(side))
  console.log('squareSurfaceArea', squareSurfaceArea(side))
  console.log('squareVolume', squareVolume(side))
}
calculate(4)
