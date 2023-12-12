Array.prototype.myFill = function (value, start, end) {
  start = start || 0
  end = end || this.length

  // Make sure start and end are numbers
  start = Number(start)
  end = Number(end)

  for (let i = 0; i < this.length; i++) {
    if (i >= start && i < end) {
      this[i] = value
    }
  }
  return this
}
const arr = [1, 3, 4, 7, 10, 15, 18]
arr.myFill(2, 3, 5)
console.log(arr)
