// the ony differnce between call and apply is --> in apply we pass arguments in array form

function printName (age, address) {
  console.log(
    `${this.firstName} ${this.lastName} age ${age} address  ${address}  `
  )
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
// function borrowing - apply
printName.apply(obj1, ['23', 'hongkong'])

printName.apply(obj2, [43, 'agro'])
