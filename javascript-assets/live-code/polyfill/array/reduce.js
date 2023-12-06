const arr = [55, 100, 5]
Array.prototype.myReduce = function (cb, initVal) {
  let result = initVal || this[0]
  for (let i = 0; i < this.length; i++) {
    result = cb(result, this[i], i, this)
  }
  return result
}
const result = arr.myReduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
)
console.log(result);