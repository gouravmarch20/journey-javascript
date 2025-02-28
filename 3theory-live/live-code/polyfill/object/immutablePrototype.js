function createImmutablePrototype(baseObj, extensionProps) {
    // Freeze the base object to prevent modifications at the top level
    const frozenBase = Object.freeze(baseObj);
    
    // Create a new object with frozenBase as its prototype and extend it with `extensionProps`
    return Object.assign(Object.create(frozenBase), extensionProps);
  }
  
  const base = { details: { age: 25 } };
  const extension = { hobby: "Coding" };
  
  const obj = createImmutablePrototype(base, extension);
  console.log(obj.details.age); // Output: 25
  
  obj.details.age = 30; // Allowed (because Object.freeze is shallow)
  console.log(obj.details.age); // Output: 30
  
  obj.hobby = "Gaming"; // Allowed (because `extension` is not frozen)
  console.log(obj.hobby); // Output: Gaming
  
  // Trying to modify top-level properties will fail
  obj.details = { age: 40 }; // ❌ Error in strict mode, ignored otherwise
  console.log(obj.details.age); // Still 30