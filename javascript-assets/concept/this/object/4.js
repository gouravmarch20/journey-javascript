// this application ==> object using same function
const printName = function () {
  console.log(this.name)
}
const obj1 = {
  name: 'goku',
  printName: printName 
}

const obj2 = {
  name: 'vegeta',
  printName 
}
//
obj1.printName()
obj2.printName()
