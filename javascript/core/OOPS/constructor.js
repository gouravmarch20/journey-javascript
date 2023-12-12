class student {
  // constructor function
  constructor(name, age) {
    console.log("constructor methord running");
    (this.name = name), (this.age = age);
  }
  //   prototype methord
}
let ram = new student("ram", 26);
console.log(ram);
