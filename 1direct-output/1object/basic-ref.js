let person = { name: 'Lydia' };

const members = [person];
person = null;

console.log(members);

//? person point to object address 
//? member array 0 index --> point to object address
//^ we changed person point to NULL , array still point object