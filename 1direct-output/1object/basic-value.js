const person = {
    name: 'Lydia',
    age: 21,
  };
  
  let age = person.age;//^ value assigned like primitive no address passed
  age = 'Amsterdam';
  
  console.log(person);

  