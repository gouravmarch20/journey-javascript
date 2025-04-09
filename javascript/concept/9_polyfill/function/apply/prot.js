Function.prototype.myApply = function (context, params) {
  if (typeof this !== "function") {
    throw new TypeError("myApply must be called on a function");
  }

  if (!Array.isArray(params)) {
    throw new TypeError("The second argument must be an array");
  }

  // If context is null or undefined, use the global object
  context = context ?? globalThis;

  // Use Symbol to create a truly unique key
  const fnKey = Symbol();

  // Assign the function to the unique symbol key on context
  context[fnKey] = this;

  // Execute the function with spread arguments
  const result = context[fnKey](...params);

  // Clean up by removing the temporary property
  delete context[fnKey];

  // Return the function's result
  return result;
};
