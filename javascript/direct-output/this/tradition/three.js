// constructor function : this point to new object

/*new : 

- create new  object  , empty value 
- this mai asign that object
- at end it return the value of this



*/
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.getFullName = function () {
    console.log(this.firstName, this.lastName)
  }
}
let personOne = new Person('parshant', 'jha')
let personTwo = new Person('lily', 'silly')
console.log(personOne)
personOne.getFullName()
personTwo.getFullName()
