const person = {
  name: "paytm",
  age: 25,
  greet() {
    console.log(`hello ${this.name}!`);
  },
};
const personOne = {
  name: "car24",
  age: 10,
 
};
 
setTimeout(person.greet, 300); // Output: hello undefined!
setTimeout(person.greet.bind(person), 300); // Output: hello paytm!


// 
const greetPerson = person.greet.bind(person);
greetPerson();
// 
const greetPersonOne = person.greet.bind(personOne);
greetPersonOne();