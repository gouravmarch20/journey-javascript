// Parent Constructor Function
function Person(name) {
    this.name = name;
}

// Adding a method to Person's prototype
Person.prototype.hello = function() {
    return `Hello, my name is ${this.name}`;
};

// Child Constructor Function
function Developer(name, title) {
    Person.call(this, name); // Calling the Parent constructor
    this.title = title;
}

// Inherit from Person by setting Developer's prototype to an instance of Person
Developer.prototype = Object.create(Person.prototype);

// Reset constructor reference (optional but recommended)
Developer.prototype.constructor = Developer;

// Adding a method to Developer's prototype
Developer.prototype.getTitle = function() {
    return `I am a ${this.title}`;
};

// Creating an instance of Developer
const dev = new Developer("Alice", "Software Engineer");

console.log(dev.hello());  // Output: Hello, my name is Alice
console.log(dev.getTitle());  // Output: I am a Software Engineer
console.log(dev instanceof Developer); // true
console.log(dev instanceof Person); // true
