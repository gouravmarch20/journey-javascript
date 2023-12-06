const data = new Map([
  [1, "gitmon"],
  [2, "--------"],
  [()=>{} , 'this is arrow']
]);

data.set('33' , 'master');
// 
console.log(data);
//get
console.log(data.get(2));
//keys
console.log(data.keys());
// values
console.log(data.values());
//size
console.log(data.size);
//delete
data.delete(2)
// has 
console.log(data.has(2))