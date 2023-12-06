// m1 >>
const mostFrequent = arr => {
  let freq = {}
  for (const num of arr) {
    if (freq[num]) {
      freq[num]++
    } else {
      freq[num] = 1
    }
  }

  let maxCount = 0,
    freqCountNum = -1
  for (const [key, value] of Object.entries(freq)) {
    if (value > maxCount) {
      maxCount = value
      freqCountNum = key
    }
  }

  for (const [key, value] of Object.entries(freq)) {
    if (value === maxCount && Number(key) > Number(freqCountNum)) {
      freqCountNum = key
    }
  }
  return Number(freqCountNum)
}
console.log(mostFrequent([4, 9, 81, 5, 81, 9, 3]))
