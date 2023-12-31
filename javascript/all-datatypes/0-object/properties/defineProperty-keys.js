let person = { name: 'Lydia' };
//? add hidden properties --> in proto
Object.defineProperty(person, 'age', { value: 21 });
Object.defineProperty(person, 'property1', {
    value: 42,
    writable: false,
  });
  
console.log(person);
console.log(person.age);
console.log(person.property1);
console.log(Object.keys(person));//? all public key visible