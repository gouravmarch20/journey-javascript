const arr = [3, 4, 6]
Array.prototype.myMap = function (cb) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this))//? push return value
  }
    return arr
}
const multiplyThree = arr.myMap((num, i, arr) => {
    console.log(arr)//? fc log as parameter
  return num * 3
})

console.log(multiplyThree)
