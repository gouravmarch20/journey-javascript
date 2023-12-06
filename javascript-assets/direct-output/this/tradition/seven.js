function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
function printName () {
  console.log(this.firstName) 
}
Person('gourav', 'mishra')
// printName()
let personOne = new printName()
console.log(personOne);