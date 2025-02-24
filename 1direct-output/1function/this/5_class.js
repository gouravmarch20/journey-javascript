class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // This method is added to the prototype of the Person class
    greet() {
      console.log(`${this.name} is ${this.age} years old.`);
    }
  }
  
  // Creating instances of the Person class
  const person1 = new Person('Alice', 25);
  const person2 = new Person('Bob', 30);
  
  person1.greet(); // Logs: "Alice is 25 years old."
  person2.greet(); // Logs: "Bob is 30 years old."