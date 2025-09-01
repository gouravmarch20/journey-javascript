function Person(name) {
  this.name = name;
  this.sayName = () => console.log(this.name);
}

const p = new Person("Alice");
p.sayName(); // 👉 "Alice"
