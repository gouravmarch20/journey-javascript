function sum(a) {
    return function(b) {
      if (b !== undefined) {
        return sum(a + b);   // keep chaining
      }
      return a;              // stop when no arg
    };
  }
  
  // ✅ Usage
  console.log(sum(1)(2)(3)(4)());  // 10
  console.log(sum(5)(10)(15)());   // 30