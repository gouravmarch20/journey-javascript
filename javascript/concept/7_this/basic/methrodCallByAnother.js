const obj1 = {
  name: "Alice",
  say() {
    console.log(this.name);
  },
};
const obj2 = { name: "Bob" };

obj2.say = obj1.say;
obj2.say(); // 👉 "Bob"
