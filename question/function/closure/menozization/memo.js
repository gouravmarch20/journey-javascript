const memorizeF = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("-- Returning from cache --");
      return cache[key];
    }
    console.log("-- Computing new value --");
    return (cache[key] = fn(...args));
  };
};

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const memorizeFactorial = memorizeF(factorial);

console.log(memorizeFactorial(5)); // Computed
console.log(memorizeFactorial(5)); // Cached
