// ! bind
let objectOne = {
  firstName: 'John',
  lastName: 'ch'
}
printFullName = function (age) {
  console.log(this.firstName, this.lastName, 'and his age is', age)
}

let printName = printFullName.bind(objectOne, 50)
printName()
