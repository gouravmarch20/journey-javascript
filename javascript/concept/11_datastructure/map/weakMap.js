let person1 = { name: "Alice" }; // Use let instead of const
let person2 = { name: "Bob" };

const secretNotes = new WeakMap();

secretNotes.set(person1, "Loves to code in JavaScript.");
secretNotes.set(person2, "Is a talented musician.");

console.log(secretNotes.get(person1)); // Output: "Loves to code in JavaScript."

// Now we can set person1 to null, allowing garbage collection
person1 = null;

console.log(secretNotes.get(person1)); // Output: undefined (after GC)
