
const obj = { n: 5, i: 7, c: 9 };

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); 
}