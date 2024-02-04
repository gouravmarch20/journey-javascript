const set = new Set([1, 2, 3]);
set.add(55);
console.log(set.has(4));
set.delete(2);
console.log(set);
console.log(set.size);
for (const i of set) {
  console.log('---',i);
}
