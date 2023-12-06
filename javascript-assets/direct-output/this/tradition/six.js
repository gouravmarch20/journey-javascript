function Person (firstName, lastName) {
    // ! here this point to window object so in window object it will create varible & asing value
  this.firstName = firstName
  this.lastName = lastName
}
function printName () {
  console.log(this) // firstName , lastname added to window object
}
Person('gourav', 'mishra')
printName()
