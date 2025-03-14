Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall must be called on a function");
  }

  // Use globalThis if context is null or undefined
  context = context ?? globalThis;

  // Use a temporary key that is less likely to be overridden
  const fnKey = "__tempFunction__";

  // Store the function in the context object
  while (context.hasOwnProperty(fnKey)) {
    fnKey += "_"; // Ensure uniqueness if `__tempFunction__` already exists
  }

  context[fnKey] = this;

  // Call the function and store the result
  const result = context[fnKey](...args);

  // Cleanup: Remove the function reference from context
  delete context[fnKey];

  // Return the function's result
  return result;
};

function greet(city, country) {
  console.log(`Hello, my name is ${this.name}. I live in ${city}, ${country}.`);
}

const person = { name: "Alice" };

// Using native call()
// greet.call(person, "New York", "USA");

// Using our polyfill myCall()
greet.myCall(person, "New York", "USA");
