function printSubarrays(arr) {
  let n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      let temp = []

      for (let k = i; k <= i + j; k++) {
        temp.push([arr[k]])
      }
      console.log(temp)
    }
  }
}

// Test the function with [1, 2, 3]
let arr = [0, 1, 2,3]
printSubarrays(arr)
