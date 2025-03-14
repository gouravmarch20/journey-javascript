const pipe = (...fns) => {
  // code here
  return (x) => {
    return fns.reduce((acc, curr) => {
      // console.log(acc);
      acc = curr(acc);
      return acc;
    }, x);
  };
};
const compose = (...fns) => {
  // ! reverse ... real array change 
  return (x) =>
    fns
      .slice()
      .reverse()
      .reduce((acc, fn) => fn(acc), x);
};

const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;
const subtract3 = (x) => x - 3;

console.log("Pipe:");
const result1 = pipe(add5, multiply2, subtract3)(10); // (10 + 5) * 2 - 3 = 27
console.log(result1); // Output: 27

console.log("Compose:");
const result2 = compose(add5, multiply2, subtract3)(10); // 10 - 3 = 7, 7 * 2 = 14, 14 + 5 = 19
console.log(result2); // Output: 19
