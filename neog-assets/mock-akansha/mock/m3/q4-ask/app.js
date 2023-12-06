// ! not working is it due to closure
//function browing > other fun--> it is a  type of explexit binding
const myObj = {
  firstName: 'goku',
  lastName: 'sen',
  printName: function () {
    console.log(`${this.firstName} ${this.lastName}`)
  }
}
// myObj.printName()
const getName = myObj.printName
getName()
