function* simpleGenerator() {
  let x = "99 not out";
  yield 1;

  yield x;
  yield 50;
  console.log("--- when i will call ----")
}
let sg = simpleGenerator();
console.log(sg.next().value);
console.log(sg.next());
console.log(sg.next());
console.log(sg.next());
