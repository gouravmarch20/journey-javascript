function User(name, salary, role) {
  this.name = name;
  this.salary = salary;
  this.role = role;
}
User.prototype.acessName = function () {
  console.log(this.name);
};
User.prototype.updateName = function (name) {
    this.name = name;
};
const u1 = new User("gourav", 498, "business");

u1.acessName()
u1.updateName("itachi");
console.log(u1);
