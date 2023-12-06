// TODO: HOW

class Person {
  constructor (name) {
    this.name = name
  }
1
  printNameArrow () {
    setTimeout(() => {
      console.log(this)
    }, 500)
  }
  printNameFunction () {
    setTimeout(function () {
      console.log(this)
    }, 2000)
  }
}
let person = new Person('bob')
person.printNameArrow()
person.printNameFunction()
