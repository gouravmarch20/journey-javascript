const findNoOfDays = (weights, minC) => {
  let load = 0
  let d = 1 //!m1 day 1 sai start
  for (let i = 0; i < weights.length; i++) {
    //!m2 if case logic ==>  load + weights[i] more than only d++
    //!m3 if case logic ===> equal to case hand mistake , running in if case
    // if (load + weights[i] < minC) {
    //   load += weights[i]
    // } else {
    //   d++
    //   load = weights[i]
    // }
    if (load + weights[i] > minC) {
      d++
      load = weights[i]
    } else {
      load += weights[i]
    }
  }
  return d
}
const shipWithinDays = (weights, days) => {
  minC = Number.MIN_SAFE_INTEGER
  totalC = 0
  let ans = days
  for (let i = 0; i < weights.length; i++) {
    minC = Math.max(minC, weights[i])
    totalC += weights[i]
  }

  //   bs
  let low = minC
  let high = totalC
  while (low <= high) {
    let m = Math.floor((low + high) / 2)
    let noOfDays = findNoOfDays(weights, m)
    if (noOfDays <= days) {
      high = m - 1
    } else {
      ans = days
      low = m + 1
    }
  }
  return low
}
const weights = [3, 2, 2, 4, 1, 4]
const days = 3
console.log(shipWithinDays(weights, days))
