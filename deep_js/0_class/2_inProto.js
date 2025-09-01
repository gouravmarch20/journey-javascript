function User(name, role, rollNo) {
  this.name = name;
  this.role = role;
  this.rollNo = rollNo;
}

User.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name}, my role is ${this.role}.`);
};

function Teacher(name, role, roolNo, subject, alpha) {
  // Call parent constructor
  User.call(this, name, role, roolNo);

  this.subject = subject;
  this.alpha = alpha;
}

Teacher.prototype = Object.create(User.prototype); // link teacher.proto.proto --> to new create object whose proto is user
Teacher.prototype.constructor = Teacher; // constructor same old , avoid inherit

Teacher.prototype.teach = function () {
  console.log(`${this.name} is teaching ${this.subject}`);
};
const u1 = new User("gourav", "student", 14);
const t1 = new Teacher("Alex", "teacher", 101, "javascript", 4);

t1.introduce();
