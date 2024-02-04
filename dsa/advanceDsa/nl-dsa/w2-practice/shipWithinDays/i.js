const noOfDays = (weights, minC) => {
  let w = 0
  let d = 0
  for (let i = 0; i < weights.length; i++) {
    if (w < minC) {
      w += weights[i]
    } else {
      d++
      w = weights[i]
    }
  }
  return d
}
const shipWithinDays = (weights, days) => {
  let minC = weights[0]
  let totalW = 0

  for (let i = 0; i < weights.length; i++) {
    minC = Math.max(minC, weights[i])
    totalW += weights[i]
  }
  return noOfDays(weights, minC)

}
const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const days = 5
console.log(shipWithinDays(weights, days))
