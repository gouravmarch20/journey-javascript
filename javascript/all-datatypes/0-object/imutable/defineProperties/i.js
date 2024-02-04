const object1 = {
    name : "go"
};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
});

object1.name = "--"
//
object1.property1 = "jan 4 iv given"
object1.property2 = "--"
console.log(object1.name);
console.log(object1.property1);
console.log(object1.property2);
