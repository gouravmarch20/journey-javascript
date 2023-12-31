// using shift & push
// rest operator can not be here --> last argument mai only use
const rotateANumberByXPositions = (num, rotation) => {
  // convert to string
  const numStr = num.toString().split('')

  // find actual number of rotations
  let actualRotations = rotation % numStr.length

  while (actualRotations > 0) {
    // take out the first element & add it at the end of the array
    const firstElement = numStr.shift()
    numStr.push(firstElement)

    actualRotations--
  }

  return Number(numStr.join(''))
}

console.log(rotateANumberByXPositions(1234, 1))
