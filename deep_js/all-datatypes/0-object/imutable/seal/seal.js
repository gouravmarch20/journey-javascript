let person = {
  name: "gourav",
};
Object.seal(person);
person.age = 55;
console.log(person);
