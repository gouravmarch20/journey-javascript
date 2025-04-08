const obj = {
  name: "gourav",
  nested: {
    a: "1",
    b: 2,
  },
  nested_1: {
    a: "1",
    b: 2,
  },
};

Object.seal(obj);
delete obj.nested_1;
obj.nested.newKey = 4;
console.log(obj);
