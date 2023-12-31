// Base class
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a sound.`)
  }
}

// Derived class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name) // Call the constructor of the base class
    this.breed = breed
  }

  bark() {
    console.log(`${this.name} barks.`)
  }
}

// Derived class inheriting from Animal
class Cat extends Animal {
  constructor(name, color) {
    super(name) // Call the constructor of the base class
    this.color = color
  }

  meow() {
    console.log(`${this.name} meows.`)
  }
}

// Create instances of the classes
const genericAnimal = new Animal("Generic Animal")
const myDog = new Dog("Buddy", "Golden Retriever")
const myCat = new Cat("Whiskers", "Tabby")

// Demonstrate inheritance
genericAnimal.speak() // Output: Generic Animal makes a sound.
myDog.speak() // Output: Buddy makes a sound.
myDog.bark() // Output: Buddy barks.
myCat.speak() // Output: Whiskers makes a sound.
myCat.meow() // Output: Whiskers meows.
