const arr = [2``]

Array.prototype.includes = function (searchElement, fromIndex) {
  console.log(searchElement, fromIndex)
  let length = this.length
  fromIndex = fromIndex | 0 // Ensure it's a number

  for (let i = fromIndex; i < length; i++) {
    if (this[i] === searchElement) {
      return true
    }
  }
  return false
}

const includesTwo = arr.includes(2)
console.log(includesTwo) // Output: true
