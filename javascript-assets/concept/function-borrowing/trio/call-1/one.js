let obj1 = {
  firstName: 'gourav',
  lastName: 'mishara',
  printName: function () {
    console.log(`${this.firstName} ${this.lastName} `)
  }
}
let obj2 = {
  firstName: 'goku',
  lastName: 'sen'
}
// obj1.printName()
obj1.printName.call(obj2)
