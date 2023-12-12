function Calculator() {
  let data = 0;
  this.add = function (val) {
    data = data + val;
    console.log(data);
  };
  this.sub = function (val) {
    console.log(data - val);
  };
  
}
let data1 = new Calculator();
data1.add(10);
data1.sub(7);
