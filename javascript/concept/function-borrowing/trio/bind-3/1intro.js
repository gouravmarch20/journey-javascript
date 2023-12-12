

const printName = function (age, address) {
  console.log(
    `${this.firstName} ${this.lastName} age ${age} address  ${address}  `
  )
}
// object
let obj1 = {
  firstName: 'gourav',
  lastName: 'mishara'
}

// function borrowing - bind => return function
let printFullName = printName.bind(obj1, 32, 'mumbai')
// ** invoke function later
printFullName()
