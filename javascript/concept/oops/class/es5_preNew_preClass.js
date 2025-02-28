// Step 1: Define the base constructor function (Parent Class)
function LivingBeing(name) {
  this.name = name; // Assign name
  this.isAlive = true; // Default property, all living beings are alive
}

// Step 2: Add a method to LivingBeing's prototype
LivingBeing.prototype.describe = function () {
  console.log(`${this.name} is alive: ${this.isAlive}`);
};

// Step 3: Define the derived constructor function (Child Class)
function Animal(name, species) {
  // * es5 -> not have new keyword
  // Call the parent constructor (LivingBeing) and pass 'this' and 'name'
  LivingBeing.call(this, name); // inherit properties only

  // Add a new property specific to Animal
  this.species = species;
}

// Step 4: Set up prototype inheritance
Animal.prototype = Object.create(LivingBeing.prototype); // Inherit methods
Animal.prototype.constructor = Animal; //* Reset the constructor reference =:

// Step 5: Add a new method specific to Animal
Animal.prototype.speak = function () {
  console.log(`I am a ${this.species} and my name is ${this.name}.`);
};

// Step 6: Create instances and test
const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");

dog.describe(); // "Buddy is alive: true" (Inherited from LivingBeing)
dog.speak(); // "I am a Dog and my name is Buddy." (From Animal)

cat.describe(); // "Whiskers is alive: true"
cat.speak(); // "I am a Cat and my name is Whiskers."
