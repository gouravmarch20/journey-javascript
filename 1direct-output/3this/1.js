function Pet(name) {
  this.name = name

  this.getName = () => this.name
  //   this.getName = function () {
  //     return this.name
  //   }
}

const cat = new Pet("Fluffy")
console.log(cat)

console.log(cat.getName()) // What is logged?

const { getName } = cat
console.log(getName())
