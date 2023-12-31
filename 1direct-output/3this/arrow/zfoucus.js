// FIXME: SETINTERVAL USED

class Person {
  constructor (name) {
    this.name = name
  }

  printNameArrow () {
    setInterval(() => {
      console.log(this)
    }, 500)
  }
  printNameFunction () {
    setInterval(function () {
      console.log(this)
    }, 2000)
  }
}
let person = new Person('bob')
person.printNameArrow()
person.printNameFunction()