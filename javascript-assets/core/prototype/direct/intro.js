const user = {
    //! arrow function not work here => not point to current object
  getAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  getName: function () {
    return this.name;
  },
};

const p1 = {
  name: "gourav",
  dob: 2002,
};
const p2 = {
  name: "gatimon",
  dob: 2002,
};
// ! DIRECT
p1.__proto__ = user;
p2.__proto__ = user;

console.log(p1);// in proto 1st level will found all asigned properties

console.log(p1.getAge(), p1.getName());
console.log(p2.getAge(), p2.getName());
