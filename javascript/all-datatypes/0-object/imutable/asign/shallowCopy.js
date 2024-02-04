const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy === obj); 


//! Deep Clone fail 
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = Object.assign({},obj3 );
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4);