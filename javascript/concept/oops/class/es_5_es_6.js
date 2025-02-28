function Animal(name) {
  this.name = name;
}
// * in es5 prototype mai write function not inside 
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise`);
};

// es 6 
class AnimalOne {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

function AnimalTwo(name) {
  this.name = name;
  //! ❌ Invalid: Defining a Function Inside Itself

}

// Adding a method to the prototype
AnimalTwo.prototype.speak = function () {
  console.log(`${this.name} makes a noise`);

};

// Creating an instance using `new`
const dog = new AnimalTwo("Buddy");
dog.speak(); // Buddy makes a noise
