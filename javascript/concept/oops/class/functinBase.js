// Step 1: Create the base constructor function
function LivingBeing(name) {
    this.name = name;
    this.isAlive = true; // Default value
  }
  
  // Add describe method to LivingBeing prototype
  LivingBeing.prototype.describe = function () {
    console.log(`${this.name} is alive: ${this.isAlive}`);
  };
  
  // Step 2: Create the derived constructor function
  function Animal(name, species) {
    // Call the LivingBeing constructor
    LivingBeing.call(this, name);
    this.species = species;
  }
  
  // Set up inheritance from LivingBeing
  Animal.prototype = Object.create(LivingBeing.prototype);
  Animal.prototype.constructor = Animal;
  
  // Add speak method to Animal prototype
  Animal.prototype.speak = function () {
    console.log(`I am a ${this.species} and my name is ${this.name}.`);
  };
  
  // Export for Node.js environment (optional)
  module.exports = { LivingBeing, Animal };
  