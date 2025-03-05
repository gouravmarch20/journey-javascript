const text = "Hello, world!";
console.log(text.includes("Hello")); // true
console.log(text.includes("world")); // true
console.log(text.includes("World")); // false (case-sensitive)
console.log(text.includes("lo", 3)); // true (search starts at index 3)
console.log(text.includes("lo", 5)); // false (search starts at index 5)
