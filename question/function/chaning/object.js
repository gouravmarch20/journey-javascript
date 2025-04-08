const calculator = {
  //!m1 : total how to write in object
  total: 0,
  add: function (n) {
    this.total += n;
    // ! m2 : need to return this futhere chain
    return this;
  },
  subtract: function (n) {
    this.total -= n;
    return this;
  },
};
const r = calculator.add(8).add(5).subtract(2);
console.log("the", r.total);
