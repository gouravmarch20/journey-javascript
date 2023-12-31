function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const lydia = new Person('Lydia', 'Hallie');
  const sarah = Person('Sarah', 'Smith');
  
  console.log(lydia);
  console.log(sarah);

  function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));