class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: "purple" })
console.log(freddie.colorChange("orange"))// Static methods are designed to live only on the constructor in which they are created, and cannot be inside any  children of class
console.log(freddie.newColor)
