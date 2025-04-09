function createImmutablePrototype(baseObj, extensionProps) {
  const newObj = Object.create(baseObj);
  const propsToAdd = Object.entries(extensionProps);
  propsToAdd.map(([key, val]) => {
    newObj[key] = val;
  });
  Object.freeze(newObj);
  return newObj;
}

const base = { greet : "hello"};
const extension = { name  : "gourav"};


const obj = createImmutablePrototype(base, extension);
obj.name = "khronos";
console.log(obj.greet);
console.log(obj.name);
console.log(obj);