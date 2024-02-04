const maxGap = arr => {
  let maxGap = 0
  let tempGap = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      tempGap = arr[i] - arr[i + 1]
    } else {
      tempGap = arr[i + 1] - arr[i]
    }

    if (maxGap < tempGap) {
      maxGap = tempGap
    }
  }
  return maxGap
}
console.log(maxGap([23, 43, 33, 32, -22]))
