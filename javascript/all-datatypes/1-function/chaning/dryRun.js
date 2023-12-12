function Calculator() {
   let data = 0;
   this.add = function (val) {
     data = data + val;
     return this;
   };
   this.sub = function (val) {
     data = data - val;
     console.log(data);
     return this;
 
   };
   this.mul = function (val) {
     data = data * val;
     console.log(data);
     console.log(this);
     return this;
 
   };
 }
 let data1 = new Calculator();
 data1.add(9).sub(5).mul(3);
 