const arrayOne = [3, 12, 'gitman', 44]

Array.prototype.forEachCoustom = function (cb) {
  console.log(cb)
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this)
  }
}
arrayOne.forEachCoustom((currentValue, index) => {

  console.log(currentValue + 100, index)
})
