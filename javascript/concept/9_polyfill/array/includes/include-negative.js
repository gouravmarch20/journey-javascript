const arr = [1, 2, 3, 4]

Array.prototype.includes = function (searchElement, fromIndex) {
  let length = this.length 

  fromIndex = fromIndex | 0 // Ensure it's a number
console.log(fromIndex);
  for (
    //& core
    let i = fromIndex < 0 ? Math.max(length + fromIndex, 0) : fromIndex;
    i < length;
    i++
  ) {
    if (this[i] === searchElement) {
      return true
    }
  }
  return false
}

const includesTwo = arr.includes(2,-3)
console.log(includesTwo) // Output: true
