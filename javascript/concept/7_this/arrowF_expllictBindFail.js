const obj = {
    example: () => {
      console.log(this); // Inherits `this` from its surrounding scope (usually `globalThis` in non-strict mode)
    },
  };
  
  const obj1 = { name: "obj1" };
  
  obj.example();         // Logs: globalThis (because arrow functions don’t have their own `this`)
  obj.example.call(obj1); // Logs: globalThis (ignores `call`)
  