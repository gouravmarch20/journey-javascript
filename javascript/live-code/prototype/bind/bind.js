
// m1 : line 13 ---> obj.printName() used
let obj = {
  name: 'goku',
  printName: function () {
    console.log(this.name)
  }
}
let objTwo = {
  name: 'gotan'
}
obj.printName()
const printName = obj.printName.bind(objTwo)
printName()
