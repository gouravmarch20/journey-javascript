const map = new Map([
  [1, "a"],
  [2, "b"],
  ["c", () => "hello"],
]);

console.log(map);
console.log(map.get("a"));
console.log(map.get("c")); //* function not store

//
map.set("4", "hello");
map.delete("c");
console.log("true/false", map.has("b"));

for (const [val, key] of map) {
  console.log(val, "-----", key);
}
