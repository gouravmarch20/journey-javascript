Function.prototype.myBind = function (context, ...params) {
    if (typeof this !== "function") {
      throw new TypeError("myBind must be called on a function");
    }
  
    // Create a unique property key to avoid overwriting existing properties
    const fnKey = Symbol("fn");
    context[fnKey] = this;
  
    return function (...args) {
      const result = context[fnKey](...params, ...args); // Invoke function
      delete context[fnKey]; // Clean up after execution
      return result; // Return the function's output
    };
  };
  
  // Example usage:
  const greet = function (name, role) {
    console.log(this.cla, name, role);
  };
  
  const obj = {
    cla: "gourav",
  };
  
  const r = greet.myBind(obj, "gourav", "sde");
  r(); // Output: gourav gourav sde
  