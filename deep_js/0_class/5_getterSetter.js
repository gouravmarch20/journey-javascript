class User {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name.toUpperCase();
  }
  set name(newName) {
    this._name = newName;
  }
}
const u = new User("gourav");
console.log(u.name);  
u.name = "alex";
console.log(u.name);  
