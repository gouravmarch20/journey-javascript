const numbs = [1, 2, 3, 4]
const productOfArrayExceptSelf = numbs => {
  const n = numbs.length
  const left = Array(n).fill(0)
  const right = Array(n).fill(0)
  const output = Array(n).fill(0)
  left[0] = numbs[0]
  right[n - 1] = numbs[n - 1]
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * numbs[i]
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * numbs[i]
  }

  output[0] = right[1]
  output[n - 1] = left[n - 2]
  for (let i = 1; i < n - 1; i++) {
    output[i] = left[i - 1] * right[i + 1]
  }
  return output
}
console.log(productOfArrayExceptSelf([...numbs]))
