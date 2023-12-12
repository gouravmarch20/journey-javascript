// Check if flatMap is not already defined
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function (callback) {
    // Use map and flat to achieve the flatMap functionality
    return this.map(callback).flat()
  }
}

// Example usage
const arr = [1, 2, [3, 4]]

const result = arr.flatMap((x) => {
  if (Array.isArray(x)) {
    return x
  } else {
    return [x * 2]
  }
})

console.log(result) // Output: [2, 4, 6, 8]
