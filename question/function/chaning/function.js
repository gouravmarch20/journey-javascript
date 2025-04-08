class Calculator {
  constructor() {
    // ! m1: this sai
    this.val = 0;
  }

  add(v) {
    // !m2 this need
    this.val += v;
    return this;
  }

  sub(v) {
    this.val -= v;
    return this;
  }
  value() {
    return this.val;
  }
}

const cal = new Calculator();
const r = cal.add(5).sub(8).value();
console.log(r);
