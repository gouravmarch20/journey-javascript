// Step 1: Define the parent constructor function
function Animal(name, sound) {
    this.name = name
    this.sound = sound
  }
  
  // Add makeSound method to Animal prototype
  Animal.prototype.makeSound = function () {
   console.log(`The ${this.name} says ${this.sound}.`)
  };
  
  // Step 2: Define the child constructor function
  function Dog(name, sound) {
    // Call the parent constructor
    Animal.call(this, name , sound)
  }
  
  // Override makeSound method in Dog prototype
  
   
  
  Dog.prototype = Object.create(Animal.prototype);  
  Dog.prototype.constructor = Dog;
  
//*   after inhert methods can override
  Dog.prototype.makeSound = function () {
    console.log(`The dog ${this.name} barks: ${this.sound}! Woof Woof!`);
  };
  
  // Export constructors for testing
  module.exports = { Animal, Dog };