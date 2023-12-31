Array.prototype.myMap = function (cb) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this))
  }
  return arr
}
const arr = ["git", "rin"]

const res = arr.myMap((el, index) => {
  el = el + '-krishna'
  return el
})
console.log(res)
