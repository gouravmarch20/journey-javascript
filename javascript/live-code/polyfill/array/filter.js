const arrayOne = [1, 5, 9, 11, 15]
const arrOfStr = ['jiren', 'jim', 'jio', 'gourav']

Array.prototype.myFilter = function (cb) {
  let result = []
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      result.push(this[index])
    }
  }
  return result
}
let result = arrayOne.myFilter(item => {
  return item > 8
})
const strLengthMoreThan4 = arrOfStr.myFilter((item, i, arr) => {
  if (item.length > 4) {
    return item
  }
})
console.log(result)
console.log(strLengthMoreThan4)
