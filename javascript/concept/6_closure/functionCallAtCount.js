function sampler(fn, count, context) {
  let counter = 0;

  return function (...args) {
    // Maintain the correct context
    const ctx = context || this;

    // Execute function when counter reaches `count`
    if (++counter === count) {
      fn.apply(ctx, args);
      counter = 0; // Reset counter
    }
  };
}

function message() {
  console.log("hello");
}

const sample = sampler(message, 4);

sample(); // counter = 1 (does nothing)
sample(); // counter = 2 (does nothing)
sample(); // counter = 3 (does nothing)
sample(); // counter = 4 → prints "hello" and resets counter to 0

sample(); // counter = 1 (does nothing)
sample(); // counter = 2 (does nothing)
sample(); // counter = 3 (does nothing)
sample(); // counter = 4 → prints "hello" and resets counter to 0
console.log("---");
const sample1 = sampler(message, 2);
sample1();
sample1();
