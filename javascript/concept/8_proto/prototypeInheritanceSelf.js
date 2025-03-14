function Person(name) {
  this.name = name;
}
Person.prototype.hello = function () {
  console.log("Hello my name", this.name);
};

function Developer(name, role) {
  Person.call(this, name);
  this.role = role;
}

//
Developer.prototype = Object.create(Person.prototype);

const devOne = new Developer("gourav", "sde");
devOne.hello();
