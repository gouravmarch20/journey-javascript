//  convert into AOA (key , value), with asending oreder key 
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); 


const person = {
    name: 'Lydia',
    age: 21,
  };
  
  for (const [x, y] of Object.entries(person)) {
    console.log(x, y);
  }