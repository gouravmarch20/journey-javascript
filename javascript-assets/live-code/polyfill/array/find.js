const arrOne = [434, 'k', 3, 54, 'igl']

Array.prototype.myFind = function (cb) {
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      return this[index]
    }
  }
  return -1
}
const result = arrOne.myFind(item => item < 50)
console.log(result)
