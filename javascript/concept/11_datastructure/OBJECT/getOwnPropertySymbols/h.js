const sym = Symbol("meta");
const obj = { [sym]: "value" };

console.log(Object.keys(obj)); // ?
console.log(Object.getOwnPropertySymbols(obj));
