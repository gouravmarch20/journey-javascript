const pipe = (...functions) => {
  let result;
  const totalFns = functions.length;

  return function (...args) {
    for (let i = 0; i < totalFns; i++) {
      const currentFn = functions[i];
      result = i === 0 ? currentFn(...args) : currentFn(result);
    }
    return result;
  };
};

const addFive = (x) => x + 5;
const multiplyByFive = (x, y) => x * 5; // Note: y is unused
const square = (x) => x * x;

console.log(pipe(addFive, multiplyByFive, square)(5));
