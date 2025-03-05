// Polyfill for Function.prototype.myBind
export function polyfillBind() {
    if (!Function.prototype.myBind) {
      Function.prototype.myBind = function (context, ...args) {
        if (typeof this !== "function") {
          throw new TypeError("Bind must be called on a function");
        }
  
        const originalFunction = this;
  
        return function (...newArgs) {
          return originalFunction.apply(context, [...args, ...newArgs]);
        };
      };
    }
  }
  
  // Apply the polyfill
  polyfillBind();
  
  // Example function to test myBind
  function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
  }
  
  // Create an object to bind `this`
  const person = { name: "Alice" };
  
  // Use myBind to bind `greet` to `person`
  const greetAlice = greet.myBind(person, "Hello");
  
  // Call the bound function with additional arguments
  console.log(greetAlice("!")); // Output: "Hello, Alice!"
  