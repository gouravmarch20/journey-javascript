//? - call -> 1st parameter is always reference to this varible . 2nd so on is the argument to the function
// function
function printName () {
  console.log(`${this.firstName} ${this.lastName} `)
}
// object
let obj1 = {
  firstName: 'gourav',
  lastName: 'mishara'
}

let obj2 = {
  firstName: 'vegeta',
  lastName: 'sen'
}
// function borrowing
printName.call(obj1)
printName.call(obj2)
