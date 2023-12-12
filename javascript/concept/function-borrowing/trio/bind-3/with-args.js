// pass args with bind
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

let printFullName = printName.bind(obj1)
// ** invoke function later
printFullName(32, 'mumbai')
