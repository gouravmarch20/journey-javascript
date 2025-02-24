function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Define greet() on the prototype of Person function  instead of inside the constructor
Person.prototype.greet = function() {
    console.log(this.name + ' is ' + this.age + ' years old.');
};

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.greet(); // Logs: "Alice is 25 years old."
person2.greet(); // Logs: "Bob is 30 years old."
function p1 (){
    console.log(this.name +' is '+ this.age +' years old.');
}
p1.greet();  