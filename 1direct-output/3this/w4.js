// TODO:
const person = {
  firstName: 'Mary',
  lastName: 'Doe',
  display: function () {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

setTimeout(() => person.display, 3000)//no output
setTimeout( person.display, 3000)//undefine
