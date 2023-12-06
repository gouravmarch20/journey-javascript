function Calculator () {
  let data = 0
  this.add = function (val) {
    data = data + val
    return this
  }
  this.sub = function (val) {
    data = data - val
    return this
  }
  this.mul = function (val) {
    data = data * val
    return data
  }
}
let data1 = new Calculator()
const result = data1.add(9).sub(5).mul(3)
console.log(result)
