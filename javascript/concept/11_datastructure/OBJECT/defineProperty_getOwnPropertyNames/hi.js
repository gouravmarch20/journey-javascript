const obj = {};
//
Object.defineProperty(obj, "hidden", {
  value: "secret",
  enumerable: false,
});
console.log(obj);
console.log(Object.getOwnPropertyNames(obj));
