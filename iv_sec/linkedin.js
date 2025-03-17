// const Foo = function(a) {
//     this.a = a;  // Store 'a' in the instance
//     this.bar = function() {
//       return this.a; 
//     };
//     this.baz = function() {
//       return this.a;
//     };
//   };
  
//   Foo.prototype.biz = function() {
//     return this.a; 
//   };
  
//   const f = new Foo(7);
  
//   console.log(f.bar()); // ✅ 7
//   console.log(f.baz()); // ✅ 7
//   console.log(f.biz()); // ✅ 7