// 1️⃣ Example with Classes
class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log("// Class-based instanceof checks:");
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true (Dog extends Animal)
console.log(dog instanceof Object); // true (All objects inherit from Object)
console.log(dog instanceof Array);  // false (Dog is not an Array)

console.log("\n");

// 2️⃣ Example with Built-in Types
console.log("// Built-in types instanceof checks:");
console.log([] instanceof Array);    // true
console.log([] instanceof Object);   // true (Arrays are objects)
console.log({} instanceof Object);   // true
console.log(new Date() instanceof Date); // true
console.log(new Date() instanceof Object); // true
console.log(5 instanceof Number);    // false (5 is a primitive)
console.log(new Number(5) instanceof Number); // true (Object wrapper)

console.log("\n");

// 3️⃣ Example with Custom Constructor Functions
function Person(name) {
  this.name = name;
}

const john = new Person("John");

console.log("// Custom Constructor Function checks:");
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

console.log("\n");

// 4️⃣ Edge Cases: Primitives & Null/Undefined
console.log("// Edge Cases:");
console.log(null instanceof Object); // false (null is not an object)
console.log(undefined instanceof Object); // false (undefined is not an object)

// Primitive values return false (instanceof only works with objects)
console.log("hello" instanceof String); // false (string primitive)
console.log(new String("hello") instanceof String); // true (String object)

console.log("\n");

// 5️⃣ instanceof Fails Across Different JavaScript Contexts (Iframes)
// This example only works in a browser with an iframe
function iframeInstanceofTest() {
  const iframe = document.createElement("iframe");
  document.body.appendChild(iframe);
  
  const iframeArray = new iframe.contentWindow.Array();
  
  console.log("// Cross-frame instanceof checks:");
  console.log(iframeArray instanceof Array); // false (different execution context)
  console.log(iframeArray instanceof iframe.contentWindow.Array); // true
}

// Uncomment to test in a browser
// iframeInstanceofTest();

// 6️⃣ Alternative: Using .constructor Property
const arr = [];
console.log("// Alternative using .constructor property:");
console.log(arr.constructor === Array); // true
console.log(john.constructor === Person); // true
console.log((5).constructor === Number); // true
