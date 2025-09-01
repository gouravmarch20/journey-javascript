function User(name) {
  this.name = name;
}

//? "static" method → attach to the constructor itself
User.greet = function () {
  console.log("Hello from static!");
};

// Prototype method (instance method)
User.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name);
};

const u1 = new User("Alex");

User.greet(); // ✅ Hello from static! (class-level)
u1.sayHi(); // ✅ Hi, I'm Alex  (instance-level)
// u1.greet();  // ❌ Error, not on instances
