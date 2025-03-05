// startswith_example.js

// Example 1: Basic Usage
let text = "Hello, world!";
console.log(text.startsWith("Hello")); // true
console.log(text.startsWith("world")); // false

// Example 2: Using the position parameter
let sentence = "JavaScript is great";
console.log(sentence.startsWith("Script", 4)); // true
console.log(sentence.startsWith("Java", 4));   // false

// Example 3: Case Sensitivity
console.log("Hello".startsWith("hello")); // false (case-sensitive)

// Example 4: Checking URLs
let url = "https://example.com";
console.log(url.startsWith("https")); // true
console.log(url.startsWith("http"));  // true
console.log(url.startsWith("ftp"));   // false

// Example 5: Checking File Extensions
let filename = "script.js";
console.log(filename.startsWith(".js")); // false
console.log(filename.endsWith(".js"));   // true
