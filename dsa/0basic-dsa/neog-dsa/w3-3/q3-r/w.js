const arrayMaxFrequentNumber = arr => {
  let obj = {}
  let maxCount = 0
  let maxNum = 0
  for (const value of arr) {
    obj.hasOwnProperty(value) ? obj[value]++ : (obj[value] = 1)
  }
  for (const [key, value] of Object.entries(obj)) {
    if (maxCount <= value) {
      if (Number(maxNum) < Number(key)) {
        ;(maxCount = value), (maxNum = Number(key))
      }
    }
  }
  return maxNum
}
console.log(arrayMaxFrequentNumber([4, 9, 81, 5, 81, -119, 3]))
