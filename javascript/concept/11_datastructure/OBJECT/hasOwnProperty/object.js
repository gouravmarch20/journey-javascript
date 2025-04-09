const obj = Object.create({ inherited: 42 });
obj.own = "value";

// for (const key in obj) {
//   console.log(key); // logs: "inherited", then "own"
// }

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key); // logs: "own" only
  }
}
