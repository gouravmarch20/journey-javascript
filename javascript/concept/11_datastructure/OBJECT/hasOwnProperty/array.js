Array.prototype.custom = "itachi";

const arr = [1, 2, 3];

// for (const key in arr) {
//   console.log(key); // Logs: "0", "1", "2", "custom"
// }

for (const key in arr) {
  if (arr.hasOwnProperty(key)) {
    console.log(key); // Logs: "0", "1", "2"
  }
}
console.log(arr.hasOwnProperty("length"));
