Function.prototype.myCall = function (context, ...args) {
  // If context is null or undefined, default to global object (window in browsers, globalThis in Node)
  if(typeof this !== "function"){
    throw new TypeError("myCall must be called on a function");
  }
  context = context || globalThis;
  console.log("myCall", context);
  // Create a unique property on the context object to store the function
  const fnSymbol = Symbol(); // Unique key to avoid overwriting existing properties
  context[fnSymbol] = this; //* `this` refers to the function calling `myCall` --> to run call function
  console.log("fnSymbol", fnSymbol);

  // Call the function and store the result
  const result = context[fnSymbol](...args);
  console.log("result", result);

  // Delete the function from the context to clean up
  delete context[fnSymbol];

  // Return the result (important for functions that return values)
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
