const obj = {
   name: 'gourav',
   role: 'sd',
   address: {
     city: 'delhi'
   }
 }
Object.freeze(obj);

// add properties
obj.name = 'indica';
obj.address.city = 'sde';
console.log(obj.name);
console.log(obj.address.city);