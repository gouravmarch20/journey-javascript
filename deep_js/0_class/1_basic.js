class User {
  constructor(name, salary, role) {
    this.name = name;
    this.salary = salary;
    this.role = role;
  }
  //   !m1 :: function in class
  acessName() {
    console.log(this.name);
  }
  updateName(newName) {
    this.name = newName;
  }
}
const u1 = new User("gourav", 498, "dev");
u1.acessName();
u1.updateName("itachi");
console.log(u1);
