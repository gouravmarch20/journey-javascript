let calculator = {
  sum: function (...args) {
    return args.reduce((acc, num) => acc + num, 0);
  },
};

let numbers = {
  values: [10, 20, 30, 40, 50], // Now supports any number of values
};

// Using .apply() to pass all array elements as arguments
let result = calculator.sum.apply(null, numbers.values);

console.log(result); // Output: 150
