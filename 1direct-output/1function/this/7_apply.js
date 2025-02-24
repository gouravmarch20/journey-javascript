const person = {
    name: "paytm",
    age: 25,
    greet(role , job) {
      console.log(`hello ${this.name} ${this.age} ${role} ${job}!`);
    },
  };
  
  const otherperson = {
    name: "ubuntooo",
    age: 25,
  };
  person.greet.apply(otherperson ,[ "termination" , "job"]);