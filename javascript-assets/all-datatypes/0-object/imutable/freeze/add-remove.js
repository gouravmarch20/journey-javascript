const obj = {
   name: 'gourav',
   role: 'sd',
   address: {
     city: 'delhi'
   }
 }
Object.freeze(obj);

// add properties
obj.address.country = 'india';
obj.exp = 'sde';
console.log(obj.address.country);
console.log(obj.exp);
// delete properties
delete obj.name
console.log('delete',obj.name);
delete obj.address.city

console.log('delete',obj.address.city);
 