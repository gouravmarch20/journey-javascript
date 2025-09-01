class User {
  constructor(name, role, rollNo) {
    this.name = name;
    this.role = role;
    this.rollNo = rollNo;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, my role is ${this.role}.`);
  }
}

class Teacher extends User {
  constructor(name, rollNo, subject, alpha) {
    super(name, "teacher", rollNo); //! call parent constructor first without inheritance
    this.subject = subject;
    this.alpha = alpha;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}

const u1 = new User("Gourav", "student", 14);
const t1 = new Teacher("Alex", 101, "JavaScript", 4);

u1.introduce();
t1.introduce();
t1.teach();

console.log(t1);
