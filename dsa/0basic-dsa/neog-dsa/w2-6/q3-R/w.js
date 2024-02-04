// using slice
const rotateANumberByXPositions = (num, rotation) => {
  // Convert to string
  const numStr = num.toString()

  // Find actual number of rotations
  const actualRotations = rotation % numStr.length

  // divide the str into 2 parts & join
  const rotatedStr =
    numStr.slice(actualRotations) + numStr.slice(0, actualRotations)

  return parseInt(rotatedStr)
}

console.log(rotateANumberByXPositions(1234, 1))
