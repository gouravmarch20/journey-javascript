const person = {
  name: "paytm",
  age: 25,
  greet(role) {
    console.log(`hello ${this.name} ${this.age} ${role}!`);
  },
};

const otherperson = {
  name: "ubuntooo",
  age: 25,
};
person.greet.call(otherperson , "termination");