function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(this.name + ' is ' + this.age + ' years old.');
    };
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.greet(); 
person2.greet(); 