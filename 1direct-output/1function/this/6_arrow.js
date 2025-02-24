const user = {
  name: "Sarah",
  age: 28,
  greet() {
    setTimeout(function () {
      console.log(`${this.name} says hello after 1 seconds!`);
    }, 1000);
    setTimeout(() => {
      console.log(`${this.name} says hello after 2 seconds!`);
    }, 2000);
  },
};

user.greet(); // Logs: "Sarah says hello after 2 seconds!"
