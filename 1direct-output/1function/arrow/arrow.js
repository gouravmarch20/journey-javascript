const person = {
  name: "person",
  greetArrow: function () {
    // * regular function  --> thus arrow function parent kai this sai acess

    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // 'this' refers to person
    }, 1000);
  },
};
const person1 = {
  name: "person1",
  greetArrow: () => {
    console.log(`Hello, ${this.name}`); // 'this' refers to person
  },
};
const person2 = {
  name: "person2",
  greetArrow: function () {
    const temp = () => {
      console.log(`Hello, ${this.name}`); // 'this' refers to person2
    };
    temp();
    
  },
};
person.greetArrow();
person1.greetArrow();
person2.greetArrow();
