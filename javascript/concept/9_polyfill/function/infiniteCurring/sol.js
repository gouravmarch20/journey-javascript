function currying(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args); // If all args are provided, execute function
        } else {
            return (...args2) => curried(...args, ...args2); // Partially apply
        }
    };
}

// Example function
function multiply(a, b, c, d) {
    return a * b * c * d;
}

const curriedMultiply = currying(multiply);

// Test Cases
console.log(curriedMultiply(1)(2)(3)(4)); // 24
console.log(curriedMultiply(1, 2)(3, 4)); // 24
console.log(curriedMultiply(1)(2, 3)(4)); // 24
