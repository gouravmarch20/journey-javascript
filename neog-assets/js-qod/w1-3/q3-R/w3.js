// Bubble short
const shortArray = ([...arr]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
    }
  }

  return arr
}
console.log(shortArray([100, 83, 32, 9, 45, 61, 45]))
// const temp = arr[j]
// arr[j] = arr[j + 1]
// arr[j + 1] = temp
