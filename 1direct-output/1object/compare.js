// why false --> here there is comparision in memory address  --> each object has unique memory space so 2 object never can be same
const obj1 = {
   name: "goku",
 };
 const obj2 = {
   name: "goku",
 };
 console.log(obj1 == obj2);
 console.log(obj1 === obj2);
 const obj3 = obj1;
 // obj1 pass memory address to obj3 --> so obj3 will ref to that memory address
 console.log(obj3 == obj1);
 console.log(obj3 === obj1);
 // 
 obj3.name = "gotan"; //? change in memory address value & both obj are refering to same obj
 console.log(obj3 === obj1);
 