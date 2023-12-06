const arrayNames = ['gourav', 'gitman', 'sette']
Array.prototype.show = function () {
  return console.log(this)
}
Array.prototype.convertIntoObject = function () {
  const obj = {}
  this.forEach((arr, index) => {
    obj[index] = arr
  })

  return obj
}
arrayNames.show()
console.log(arrayNames.convertIntoObject())
